import React, { useEffect, useState } from 'react';
import { TokenboundClient } from '@tokenbound/sdk'

function Tokenbound() {
  const [tokenBoundAccount, setTokenBoundAccount] = useState(null);

  useEffect(() => {
    const tokenboundClient = new TokenboundClient({ walletClient, chainId: 1 });

    const account = tokenboundClient.getAccount({
      tokenContract: "0xb7d8E0F586f0838dCc6BDaa25d608472cc419B60",
      tokenId: "1",
    });

    setTokenBoundAccount(account);

    // Log the account for debugging purposes
    console.log(account);
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      {/* Render the tokenBoundAccount or some representation of it here */}
      {tokenBoundAccount && (
        <div>
          {/* Display the account details or any other relevant information */}
          Account: {JSON.stringify(tokenBoundAccount)}
        </div>
      )}
    </div>
  );
}

export default Tokenbound;
