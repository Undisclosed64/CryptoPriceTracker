import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import PriceConsumerABI from "./PriceConsumer.json";

const ContractAddress = "0x15D8be4d3C48462Db4A5E88410065Deb18c9B5b4";

export const Card = () => {
  const { title } = useParams();
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetchPrice();
  }, []);

  const fetchPrice = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://eth-sepolia.g.alchemy.com/v2/Zt3yF0jTCOZLF1mkXYaA5ss5yg6eveHf"
      );

      const contract = new ethers.Contract(
        ContractAddress,
        PriceConsumerABI.abi,
        provider
      );

      const assetCount = await contract.getAssetCount();

      for (let i = 0; i < assetCount; i++) {
        const [symbol, price] = await contract.getAsset(i);
        console.log(symbol, title);
        console.log(price.toString());
        const modifiedSymbol = symbol.replace("/", "-");
        if (modifiedSymbol === title) {
          setPrice(price.toString());
          break;
        }
      }
    } catch (error) {
      console.error("Error fetching price:", error);
    }
  };

  return (
    <div className="section-card">
      <div className="cards-wrapper">
        <div>
          <h2 className="title">{title}</h2>
          {price !== null ? (
            <p className="price">Price: ${price}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
