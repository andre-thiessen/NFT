//import ethers
const { ethers } = require("hardhat");

async function main (){
    //What we want to deploy
    const contract = await ethers.getContractFactory("NFT");

    //Deploy the contract
    const deployedContract = await contract.deploy();
    //Wait the deployment to finish
    await deployedContract.deployed();

    //print the address of the deployed contract
    console.log("NFT contract deployed to: ", deployedContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });