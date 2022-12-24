// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./SelfStarterV2.sol";

//import "hardhat/console.sol";

contract LaunchpadFactory is Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;

    Counters.Counter private _launchpadIds;

    string public version = "v0.0";
    bool public whitelistEnforced;
    mapping (address => bool) public whitelistedOperators;

    // owner => launchpads[]
    mapping (address => address[]) public launchpads;
    //launchpad => launch timestamp
    mapping (address => uint256) public launchIndex;
    // launchpad => owner
    mapping (address => address) public operator;
    // unique id => lauchpad address
    mapping(uint256 => address) public launchpadAddresses;

    event LaunchpadDeployed(address indexed launchpadAddress, address indexed creator);

    constructor(string memory _version) {
        version = _version;
    }

    function launch(string memory _launchpadTitle) external returns (SelfStarterV2) {
        if(whitelistEnforced){
            require(whitelistedOperators[_msgSender()], "FACTORY: OPERATOR NOT WHITELISTED");
        }
        SelfStarterV2 launchpad = new SelfStarterV2(_launchpadTitle);
        launchpad.transferOwnership(_msgSender());
        address launchpadAddress = address(launchpad);

        _launchpadIds.increment();
        uint256 newLaunchpadId = _launchpadIds.current();
        launchpadAddresses[newLaunchpadId] = launchpadAddress;

        launchpads[_msgSender()].push(launchpadAddress);
        operator[launchpadAddress] = _msgSender();
        launchIndex[launchpadAddress] = block.timestamp;
        emit LaunchpadDeployed(launchpadAddress, _msgSender());
        return launchpad;
    }

    function getLaunchpadCount(address _user) external view returns (uint256) {
        return launchpads[_user].length;
    }

    function toggleListEnforcement(bool _state) external onlyOwner {
        whitelistEnforced = _state;
    }

    function modWhiteList(address[] calldata _whiteList, bool _state) external onlyOwner {
        for (uint256 i = 0; i < _whiteList.length; ++i) {
            whitelistedOperators[_whiteList[i]] = _state;
        }
    }

    function fetchLaunchpadItems() public view returns (address[] memory) {
        uint itemCount = _launchpadIds.current();

        uint currentIndex = 0;
        address[] memory items = new address[](itemCount);

        for (uint i = 0; i < itemCount; i++) {
            uint currentId = i + 1;
            items[currentIndex] = launchpadAddresses[currentId];
            currentIndex += 1;
        }

        return items;
    }
}