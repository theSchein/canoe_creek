import { useState } from 'react';

const Mint = () => {
    const [contractCID, setContractCID] = useState('');
    const [collectionName, setCollectionName] = useState('');
    const [to, setTo] = useState('');
    const [tokenId, setTokenId] = useState('');

    const handleMint = async () => {
        try {
            const response = await fetch('/api/mintToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to,
                    tokenId,
                    uri: contractCID, // Assuming the contractCID is the URI you want to set
                }),
            });
            const data = await response.json();
            if (data.txHash) {
                console.log("Successfully minted! Transaction hash:", data.txHash);
            } else {
                console.error("Error:", data.error);
            }
        } catch (error) {
            console.error("Error minting token:", error);
        }
    };

    return (
        <div className="min-h-screen bg-background py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Mint NFT on Goerli-Base</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="flex flex-col">
                                    <label className="leading-loose">Recipient Address:</label>
                                    <input type="text" className="px-4 py-2 border rounded-lg" value={to} onChange={(e) => setTo(e.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <label className="leading-loose">Token ID:</label>
                                    <input type="text" className="px-4 py-2 border rounded-lg" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <label className="leading-loose">Contract CID (URI):</label>
                                    <input type="text" className="px-4 py-2 border rounded-lg" value={contractCID} onChange={(e) => setContractCID(e.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <label className="leading-loose">Collection Name:</label>
                                    <input type="text" className="px-4 py-2 border rounded-lg" value={collectionName} onChange={(e) => setCollectionName(e.target.value)} />
                                </div>
                            </div>
                            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                <button onClick={handleMint} className="w-full bg-primary text-white p-2 rounded-lg hover:bg-green-600">Mint NFT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mint;
