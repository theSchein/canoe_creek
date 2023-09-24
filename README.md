# Canoe Creek

This is a tech demo app exploring how NFTs can be used by creators to generate value by being used in AI text-to-image models. 

## Concept 
![image](https://github.com/theSchein/canoe_creek/assets/4759807/ace90d3d-469a-40a2-ac87-4d40860e1d17)

Creater mints thier artwork as NFTs, the NFT are then fetched by the app. Photos and and ERC-6551 tokenbound addresses are collected and stored on IPFS

User selects from the collections on the app which to use in thier LoRA text-to-image model and creates a prompt in the style of that collection

Prompt command along with a fee is sent to Lilypad to run the AI model on Bacalhua. Excess of the fee not used on computation is distributed even to the tokenbound NFTs

User gets an image output from the model and the NFT collects a royalty

## Status

![Screenshot from 2023-09-24 08-12-39](https://github.com/theSchein/canoe_creek/assets/4759807/13a20fee-44e5-475f-90e5-a7c7d38755f4)


- Creators can mint NFTs
- Any NFT can have its own wallet looked up
- NFT Data is fetched from the Creator's wallet but not yet processed
- Users cna create prompts but the app is not yet connected to Lilypad
- Payments processing has yet to be implemented



## Running the App

Install the packages and start the local server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
