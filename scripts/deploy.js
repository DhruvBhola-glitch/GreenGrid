async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying with:", deployer.address);

  const GreenToken = await ethers.getContractFactory("GreenToken");
  const token = await GreenToken.deploy();
  await token.deployed();

  console.log("GreenToken deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
