/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumer {
    struct Asset {
        string symbol;
        address aggregatorAddress;
    }

    Asset[] public assets;

    constructor() {
        assets.push(
            Asset("BTC/USD", 0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43)
        );
        assets.push(
            Asset("ETH/USD", 0x694AA1769357215DE4FAC081bf1f309aDC325306)
        );
        assets.push(
            Asset("CSPX/USD", 0x4b531A318B0e44B549F3b2f824721b3D0d51930A)
        );
        assets.push(
            Asset("EUR/USD", 0x1a81afB8146aeFfCFc5E50e8479e826E7D55b910)
        );
        assets.push(
            Asset("FORTH / USD", 0x070bF128E88A4520b3EfA65AB1e4Eb6F0F9E6632)
        );
        assets.push(
            Asset("SNX/USD", 0xc0F82A46033b8BdBA4Bb0B0e28Bc2006F64355bC)
        );
        // Add more assets as needed
    }

    function getAssetCount() external view returns (uint256) {
        return assets.length;
    }

    function getAsset(
        uint256 index
    ) external view returns (string memory, int256) {
        require(index < assets.length, "Invalid asset index");

        Asset memory asset = assets[index];
        return (asset.symbol, getLatestData(asset.aggregatorAddress));
    }

    function getLatestData(
        address aggregatorAddress
    ) internal view returns (int256) {
        AggregatorV3Interface dataFeed = AggregatorV3Interface(
            aggregatorAddress
        );
        (, int256 answer, , , ) = dataFeed.latestRoundData();
        return answer / 1e8;
    }
}
