async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const GreenToken = await ethers.getContractFactory("GreenToken");
  const token = await GreenToken.deploy();

  await token.waitForDeployment(); // <- ✅ This replaces .deployed()

  console.log("GreenToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
