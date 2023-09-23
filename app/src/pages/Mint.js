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
        <div>
            <h1>Mint NFT</h1>
            <div>
                <label>
                    Recipient Address:
                    <input
                        type="text"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Token ID:
                    <input
                        type="text"
                        value={tokenId}
                        onChange={(e) => setTokenId(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Contract CID (URI):
                    <input
                        type="text"
                        value={contractCID}
                        onChange={(e) => setContractCID(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Collection Name:
                    <input
                        type="text"
                        value={collectionName}
                        onChange={(e) => setCollectionName(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleMint}>Mint NFT</button>
        </div>
    );
};

export default Mint;
