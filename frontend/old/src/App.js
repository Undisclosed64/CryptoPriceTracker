import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractAbi from "./PriceConsumer.json";

const ContractAddress = "0x15D8be4d3C48462Db4A5E88410065Deb18c9B5b4";

function App() {
  const [contract, setContract] = useState(null);
  const [assetData, setAssetData] = useState([]);

  useEffect(() => {
    initializeContract();
    fetchAssetData();
  }, []);

  const initializeContract = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Initialize ethers provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the contract instance
        const signer = provider.getSigner();
        const abi = contractAbi.abi; // Extract the ABI array from the JSON object
        const contract = new ethers.Contract(ContractAddress, abi, signer);
        setContract(contract);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Metamask not detected");
    }
  };

  const fetchAssetData = async () => {
    if (contract) {
      try {
        const assetCount = await contract.getAssetCount();
        const data = [];

        for (let i = 0; i < assetCount.toNumber(); i++) {
          const asset = await contract.getAsset(i);
          const symbol = asset[0];
          const price = asset[1].toString();
          data.push({ symbol, price });
        }
        console.log(data.symbol);
        setAssetData(data.price);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h1>Asset Data</h1>
      <ul>
        {assetData.map((asset, index) => (
          <li key={index}>
            <strong>Symbol:</strong> {asset[0]}, <strong>Price:</strong>{" "}
            {asset[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
