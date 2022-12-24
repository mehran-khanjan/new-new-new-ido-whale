import axios from 'axios';
import {getJWT, isUserLogin} from "../utils/localStorageActions";
import {
    buyLaunchpadActions,
    createLaunchpadActions,
    getAllLaunchpadsActions,
    getSingleLaunchpadActions,
    updateLaunchpadDetailedActions
} from "./ReduxStore";
import {getter, setter} from "../utils/blockchainSetter";
import presaleFactoryContractABI from "../blockchain/PresaleFactoryNew.json";
import presaleContractABI from '../blockchain/PresaleNew.json';
import {ethers} from "ethers";

export const buyLaunchpad = ({provider, buyerAmount, contractAddress}) => {
    return async (dispatch) => {
        try {
            // const axiosOptions = {
            //     url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}`,
            // }
            // const result = await axios(axiosOptions);
            // console.log('buy launchpad result is: ', result);
            // console.log('timestamp: ', (await provider.getBlock(25588425)).timestamp);
            // await getter(
            //     contractAddress,
            //     presaleContractABI.abi,
            //     provider,
            //     'presaleStatus',
            //     []
            // )

            const {receipt, issuedEvents} = await setter(
                contractAddress,
                presaleContractABI.abi,
                provider,
                'userDeposit',
                // preRate is tokenCount. We should pass with decimals or without decimals?
                [
                    {value: ethers.utils.parseEther(buyerAmount)}
                ],
                'UserDepsitedSuccess',
                dispatch
            );
            // no event found because it has no 0x log data!
            console.log('buyer address is: ', issuedEvents.buyerAddress);
            console.log('buyer value is: ', issuedEvents.buyValue)

            dispatch(buyLaunchpadActions.setBuy());
            console.log('buy token done.');

        } catch (e) {
            console.log(e);
        }
    }
}

export const createLaunchpad = (tokenContractAddress, networkId) => {
    return async (dispatch) => {
        try {
            if (!isUserLogin()) {
                console.log('Please login first!');
                // add some showing modal error
                return;
            }
            const axiosOptions = {
                url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}`,
                method: 'post',
                headers: {
                    // "Authorization": `Bearer ${data.token}`
                    "Authorization": `Bearer ${getJWT()}`
                },
                data: {
                    tokenContractAddress,
                    isDeployed: '0'
                }
            }
            const result = await axios(axiosOptions);
            if (result.data.status === 'success') {
                const serverResult = result.data.data;
                console.log(result.data.data);
                dispatch(createLaunchpadActions.setValid({
                    networkId: serverResult.launchpad.networkId,
                    contractAddress: serverResult.launchpad.tokenContractAddress
                }));
            }


        } catch (e) {
            if (e.response.data.status === 'fail') {
                console.log(e.response.data.data);
            }

        }
    }
}

export const getSingleLaunchpad = ({launchpadContractAddress, networkId}) => {
    return async (dispatch) => {
        try {
            if (!isUserLogin()) {
                console.log('Please login first!');
                // add some showing modal error
                return;
            }

            const axiosOptions = {
                url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}/${launchpadContractAddress}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getJWT()}`
                }
            }
            const result = await axios(axiosOptions);
            console.log('the single launchpad is: ', result.data.data.launchpad);

            dispatch(getSingleLaunchpadActions.setSingleLaunchpad(result.data.data.launchpad));
        } catch (e) {
            console.log(e);
        }
    }
}

export const getAllLaunchpads = ({networkId, pageNumber}) => {
    return async (dispatch) => {
        try {
            if (!isUserLogin()) {
                console.log('Please login first!');
                // add some showing modal error
                return;
            }

            const axiosOptions = {
                url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}/?page=${pageNumber}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getJWT()}`
                }
            }
            const result = await axios(axiosOptions);
            console.log('get all result is: ', result.data);

            dispatch(getAllLaunchpadsActions.setLaunchpads(result.data.data.launchpads));
        } catch (e) {
            console.log(e);
        }
    }
}

export const updateLaunchpad = (
    {
        provider,
        tokenContractAddress,
        networkId,
        isDeployed,
        presaleRate,
        softCap,
        hardCap,
        minBuy,
        maxBuy,
        refundType,
        router,
        dexLiquidity,
        dexListingRate,
        startDate,
        stopDate,
        liquidityLockup,
        logoURL,
        websiteURL,
        facebook,
        twitter,
        instagram,
        discord,
        reddit,
        github,
        telegramGroup,
        telegramChannel,
        description
    }
) => {
    return async (dispatch) => {

        try {
            if (!isUserLogin()) {
                console.log('Please login first!');
                // add some showing modal error
                return;
            }

            const axiosOptions = {
                url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}/${tokenContractAddress}`,
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${getJWT()}`
                },
                data: {
                    isDeployed,
                    presaleRate,
                    softCap,
                    hardCap,
                    minBuy,
                    maxBuy,
                    refundType,
                    router,
                    dexLiquidity,
                    dexListingRate,
                    startDate,
                    stopDate,
                    liquidityLockup,
                    logoURL,
                    websiteURL,
                    facebook,
                    twitter,
                    instagram,
                    discord,
                    reddit,
                    github,
                    telegramGroup,
                    telegramChannel,
                    description
                }
            }
            const result = await axios(axiosOptions);
            console.log('create launchpad result is: ', result.data);

            if (presaleRate) {
                dispatch(updateLaunchpadDetailedActions.setUpdate());
                // call blockchain function

                const {receipt, issuedEvents} = await setter(
                    process.env.REACT_APP_CONTRACT_ADDRESS,
                    presaleFactoryContractABI.abi,
                    provider,
                    'create',
                    /*
                    address _sale_token,
                    uint256 _token_rate,
                    uint256 _raise_min,
                    uint256 _raise_max,
                    uint256 _softCap,
                    uint256 _hardCap,
                    bool _whitelist,
                    uint256 _presale_start,
                    uint256 _presale_end
                    */
                    // preRate is tokenCount. We should pass with decimals or without decimals?
                    [
                        tokenContractAddress,
                        +presaleRate,
                        ethers.utils.parseEther(minBuy),
                        ethers.utils.parseEther(maxBuy),
                        ethers.utils.parseEther(softCap),
                        ethers.utils.parseEther(hardCap),
                        false, +startDate, +stopDate,
                        {value: ethers.utils.parseEther('0.01')}],
                    'CreateEvent',
                    dispatch
                );
                console.log('new launchpad address is: ', issuedEvents.tokenAddress)
                // new contract address: 0xd42a6DcD2BB740F9E46d980781B8EffC69Ec076d
                const preSaleContractAddress = issuedEvents.tokenAddress;

                // update contract's data
                const axiosOptions = {
                    url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}/${tokenContractAddress}`,
                    method: 'PATCH',
                    headers: {
                        'Authorization': `Bearer ${getJWT()}`
                    },
                    data: {
                        contractAddress: preSaleContractAddress
                    }
                }
                const result = await axios(axiosOptions);
                console.log('update launchpad contract address result is: ', result.data);

            } else {
                dispatch(updateLaunchpadDetailedActions.setMoreUpdate());
            }
        } catch (e) {
            console.log(e);
        }
    }
}