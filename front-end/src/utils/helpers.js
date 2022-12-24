import {Interface} from "ethers/lib/utils";


export function formatAddress(value, length = 4) {
    return `${value.substring(0, length + 2)}...${value.substring(value.length - length)}`
}

export const parseLogs = (receipt, eventName, abi) => {

    let iFace = new Interface(abi);

    for (let log of receipt.logs) {
        const data = log.data;
        const topics = log.topics;

        console.log('log data: ', log.data);
        console.log('log topics: ', log.topics);

        // because of this post, I refine the logs array
        // and just check logs have data '0x'
        // https://github.com/ethers-io/ethers.js/discussions/3220
        if(log.data === '0x') {
            let issuedEvent = iFace.parseLog({topics, data});
            console.log('final event: ', issuedEvent);

            if (issuedEvent.name === eventName) {
                const eventNames = issuedEvent.eventFragment.inputs;

                let finalObject = {};

                for (const key in eventNames) {
                    finalObject[eventNames[key].name] = issuedEvent.args[key];
                }

                return finalObject;
            }
        }
    }

}

export function trimTextPrice(txt) {
    const begin = txt.toString().substring(0, 10);
    return `${begin}`;
}