/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/


// Define the NFT object with metadata
function createNFT(name, eyeColor, shirtType, bling) {
  return {
    name: name,
    eyeColor: eyeColor,
    shirtType: shirtType,
    bling: bling,
  };
}

// Store all NFTs in an array
let myNFTs = [
  createNFT("NFT1", "blue", "hoodie", "diamond necklace"),
  createNFT("NFT2", "green", "t-shirt", "gold ring"),
  createNFT("NFT3", "brown", "jacket", "platinum watch"),
  // Add more NFTs here as you like
];

// Function to print the details of each NFT
function printNFTDetails(nfts) {
  nfts.forEach((nft, index) => {
    console.log(`NFT ${index + 1} Details:`);
    console.log(`Name: ${nft.name}`);
    console.log(`Eye Color: ${nft.eyeColor}`);
    console.log(`Shirt Type: ${nft.shirtType}`);
    console.log(`Bling: ${nft.bling}`);
    console.log("----------------------");
  });
}

// Call the function to print details of all NFTs
printNFTDetails(myNFTs);
