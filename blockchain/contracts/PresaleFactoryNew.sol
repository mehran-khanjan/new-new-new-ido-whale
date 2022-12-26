// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8.0;

import "./PresaleNew.sol";
import "@openzeppelin/contracts/utils/Address.sol";

/**
 * @title Counters
 * @author Matt Condon (@shrugs)
 * @dev Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number
 * of elements in a mapping, issuing ERC721 ids, or counting request ids.
 *
 * Include with `using Counters for Counters.Counter;`
 */
library Counters {
    struct Counter {
        // This variable should never be directly accessed by users of the library: interactions must be restricted to
        // the library's function. As of Solidity v0.5.2, this cannot be enforced, though there is a proposal to add
        // this feature: see https://github.com/ethereum/solidity/issues/4637
        uint256 _value; // default: 0
    }

    function current(Counter storage counter) internal view returns (uint256) {
        return counter._value;
    }

    function increment(Counter storage counter) internal {
    unchecked {
        counter._value += 1;
    }
    }

    function decrement(Counter storage counter) internal {
        uint256 value = counter._value;
        require(value > 0, "Counter: decrement overflow");
    unchecked {
        counter._value = value - 1;
    }
    }

    function reset(Counter storage counter) internal {
        counter._value = 0;
    }
}

contract PresaleFactoryNew {
    Counters.Counter private launchpadId;
    using Counters for Counters.Counter;
    using Address for address payable;
    using SafeMath for uint256;

    address public feeTo;
    address _owner;
    uint256 public flatFee;

    modifier enoughFee() {
        require(msg.value >= flatFee, "Flat fee");
        _;
    }

    modifier onlyOwner {
        require(msg.sender == _owner, "You are not owner");
        _;
    }

    event CreateEvent(address indexed tokenAddress);

    // Launchpads list
    mapping(uint256 => address) public launchpads;

    constructor() {
        feeTo = msg.sender;
        flatFee = 10_000_000 gwei;
        _owner = msg.sender;
    }

    function setFeeTo(address feeReceivingAddress) external onlyOwner {
        feeTo = feeReceivingAddress;
    }

    function setFlatFee(uint256 fee) external onlyOwner {
        flatFee = fee;
    }

    function refundExcessiveFee() internal {
        uint256 refund = msg.value.sub(flatFee);
        if (refund > 0) {
            payable(msg.sender).sendValue(refund);
        }
    }

    function create(
        address _sale_token,
        uint256 _token_rate,
        uint256 _raise_min,
        uint256 _raise_max,
        uint256 _softcap,
        uint256 _hardcap,
        bool _whitelist,
        uint256 _presale_start,
        uint256 _presale_end
    ) external payable enoughFee returns (address) {
        // require(_raise_min > _raise_max, "Raise_max must more than raise_min");
        require(_raise_min < _raise_max, "Raise_max must more than raise_min");
        require(_hardcap > _softcap, "Hardcap must more than softcap");
        // require(_softcap > _hardcap/2, "Softcap must more than hardcap * 50%");
        require(_softcap >= _hardcap/2, "Softcap must more than or equal hardcap * 50%");
        require(_presale_end > _presale_start, "End date cannot be earlier than start date");
        refundExcessiveFee();
        PresaleNew newToken = new PresaleNew(
            msg.sender, _sale_token, _token_rate, _raise_min, _raise_max,
            _softcap, _hardcap, _whitelist,
            _presale_start, _presale_end
        );
        emit CreateEvent(address(newToken));
        payable(feeTo).transfer(flatFee);

        // add new launchpad address to the mapping list
        launchpadId.increment();
        uint newLaunchpadId = launchpadId.current();
        launchpads[newLaunchpadId] = address(newToken);

        return address(newToken);
    }

    function getLastLaunchpad() public view returns(uint) {
        return launchpadId.current();
    }
}