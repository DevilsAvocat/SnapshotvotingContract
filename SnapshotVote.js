//Web3 library for connecting to blockchain
const Web3 = require("web3")
const fs = require('fs');
// a common library for interacting with ethereum wallets
const { ethers } = require("ethers");
const snapshot = require("@snapshot-labs/snapshot.js");
const hub = 'https://hub.snapshot.org'; // or https://testnet.snapshot.org for testnet
const client712 = new snapshot.Client712(hub);


async function mainrun(){

  const provider = new ethers.providers.JsonRpcProvider(/*  Insert RPC */); //my RPC
  const web3 = new ethers.providers.Web3Provider(provider);

  const wallet = new ethers.Wallet(/*  PRIVKEY */,web3); 

    let smartContractAddress = '0x8DC21124Ce7eb2d7e417B119bacdAb210B18fB8E';
try{
  const receipt = await client712.vote(wallet, smartContractAddress, {
      space: 'aavegotchi.eth',
      proposal:"0x8ea00198a80822d8ba15d00a1e09b3b9fd3616b1b06d05467db85b127ffcbffd",
      type: 'single-choice',
      choice: 1,
      metadata: JSON.stringify({})
    });

    console.log(receipt);
}catch(err){
  console.log(err);
}
    
}

mainrun()
