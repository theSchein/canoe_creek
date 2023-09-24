import React, { useState } from 'react';
import { TokenboundClient } from '@tokenbound/sdk';
import { useWalletClient } from 'wagmi';
import { Button, TextField } from '@mui/material';

function NFTWallet() {
  const { data: walletClient } = useWalletClient();
  const [tokenBoundAccount, setTokenBoundAccount] = useState(null);
  const [address, setAddress] = useState('');
  const [tokenId, setTokenId] = useState('');

  const handleFetchAccount = async () => {
    const tokenboundClient = new TokenboundClient({ walletClient, chainId: 1 });
    const account = await tokenboundClient.getAccount({
      tokenContract: address,
      tokenId: tokenId,
    });
    setTokenBoundAccount(account);
  };

  return (
<div className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-10">
  <div className="w-96 bg-green-800 p-6 rounded-lg shadow-md">
    <div className="text-3xl font-bold mb-4 text-center text-green-100">
      Find NFT Wallet Address By Contract and Token ID
    </div>
    <TextField
      className="mb-4"
      InputProps={{ className: 'text-green-900' }}
      InputLabelProps={{ className: 'text-white' }}
      label="Contract Address"
      value={address}
      onChange={(event) => setAddress(event.target.value)}
    />
    <TextField
      className="mb-4"
      InputProps={{ className: 'text-green-900' }}
      InputLabelProps={{ className: 'text-white' }}
      label="Token ID"
      value={tokenId}
      onChange={(event) => setTokenId(event.target.value)}
    />
    <Button 
      variant="contained" 
      className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded"
      onClick={handleFetchAccount}
    >
      Fetch Account
    </Button>
    {tokenBoundAccount && (
      <div className="mt-4 p-4 bg-green-700 rounded text-green-100">
        <span className="font-bold">Tokenbound Account:</span> {JSON.stringify(tokenBoundAccount)}
      </div>
    )}
  </div>
</div>

  );
}

export default NFTWallet;
