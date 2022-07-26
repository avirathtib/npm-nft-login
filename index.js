async function checkNFT(nftContracts, walletAddress) {
  const web3 = createAlchemyWeb3(
    "https://eth-rinkeby.alchemyapi.io/v2/SaWxdyK3cbchwIi54sG4P6vPMA6MrXrz"
  );
  const nfts = await web3.alchemy.getNfts({ owner: walletAddress });
  const nftList = nfts["ownedNfts"];
  for (nftContract of nftContracts) {
    for (nft of nftList) {
      if (nftContract == nft.contract.address) {
        return true;
      }
    }
  }
  return false;
}

module.exports = checkNFT;
