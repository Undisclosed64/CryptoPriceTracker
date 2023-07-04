async function main() {
  const PriceConsumer = await ethers.getContractFactory("PriceConsumer");

  // Start deployment, returning a promise that resolves to a contract object
  const priceConsumer = await PriceConsumer.deploy();
  await priceConsumer.deployed();

  const assetCount = await priceConsumer.getAssetCount();
  console.log("Asset Count:", assetCount.toNumber());

  for (let i = 0; i < assetCount; i++) {
    const [symbol, price] = await priceConsumer.getAsset(i);
    console.log(`Asset ${i + 1}: Symbol=${symbol}, Price=${price}`);
  }
  console.log("Contract deployed to address:", priceConsumer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
