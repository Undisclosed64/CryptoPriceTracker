// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import { getAssetCount, getAsset } from "../hardhat/contractMethods"; // Replace with the actual path to your contract methods

// const AssetPrice = () => {
//   const [prices, setPrices] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const provider = new ethers.providers.JsonRpcProvider(
//         process.env.REACT_APP_API_URL
//       );
//       const contract = new ethers.Contract(
//         process.env.REACT_APP_CONTRACT_ADDRESS
//       );

//       const assetCount = await contract.getAssetCount();
//       const assetPromises = [];

//       for (let i = 0; i < assetCount; i++) {
//         assetPromises.push(contract.getAsset(i));
//       }

//       const assetData = await Promise.all(assetPromises);
//       setPrices(assetData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Asset Prices</h1>
//       {prices.map((price, index) => (
//         <div key={index}>
//           <p>Symbol: {price[0]}</p>
//           <p>Price: {price[1]}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AssetPrice;
