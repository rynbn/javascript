/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let numberOfNFTs = 0;
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, imageURL) {
    let nft = {
      name: name,
      description: description,
      imageURL: imageURL
    };
    numberOfNFTs++;
    nfts.push(nft);
    return nft;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Description: " + nfts[i].description);
        console.log("Image URL: " + nfts[i].imageURL + "\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of NFTs minted: " + numberOfNFTs);
}

// call your functions below this line
mintNFT("NFT 1", "Description 1", "https://example.com/image1.png");
mintNFT("NFT 2", "Description 2", "https://example.com/image2.png");
mintNFT("NFT 3", "Description 3", "https://example.com/image3.png");

listNFTs();

getTotalSupply();

