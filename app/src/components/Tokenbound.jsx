import React, { useEffect, useState } from 'react';
import { TokenboundClient } from '@tokenbound/sdk'
import { useWalletClient } from 'wagmi';


function Tokenbound() {

  const { data: walletClient } = useWalletClient()


  //const [address] = await client.getAddresses() 

  
  const [tokenBoundAccount, setTokenBoundAccount] = useState(null);

  useEffect(() => {
    const tokenboundClient = new TokenboundClient({ walletClient, chainId: 1 });

    const account = tokenboundClient.getAccount({
      tokenContract: "0x4645F04cdB1F03088948cb54A56A22acE39882e7",
      tokenId: "6",
    });

    setTokenBoundAccount(account);

    // Log the account for debugging purposes
    console.log(account);
  }, [walletClient]); // The empty dependency array ensures this effect runs once when the component mounts

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
