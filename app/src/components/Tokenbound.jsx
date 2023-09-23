import React, { useEffect, useState } from 'react';
import { TokenboundClient } from '@tokenbound/sdk';
import { useWalletClient } from 'wagmi';

function Tokenbound({ data }) {
  const { data: walletClient } = useWalletClient();
  const [tokenBoundAccounts, setTokenBoundAccounts] = useState([]);

  useEffect(() => {
    const tokenboundClient = new TokenboundClient({ walletClient, chainId: 1 });
    const addresses = data.results.map(item => item.contractAddress);

    const fetchAccounts = async () => {
      const accounts = [];
      for (let address of addresses) {
        const account = await tokenboundClient.getAccount({
          tokenContract: address,
          tokenId: "1", //hard coded for POC
        });
        accounts.push(account);
      }
      setTokenBoundAccounts(accounts);
    };

    fetchAccounts();
  }, [walletClient, data]);

  return (
    <div>
      {tokenBoundAccounts.map((account, index) => (
        <div key={index}>
          Tokenbound Account: {JSON.stringify(account)}
        </div>
      ))}
    </div>
  );
}

export default Tokenbound;
