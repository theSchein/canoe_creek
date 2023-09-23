import { useState } from 'react';
import QuickNode from '@quicknode/sdk';
import ImageDisplay from './ImageDisplay';
import Tokenbound from './Tokenbound';

function PullNfts({ address }) {
  const [data, setData] = useState(null);

  const fetchData = async (addressToFetch) => {
    const qn = new QuickNode.API({
      graphApiKey: process.env.QUICKNODE_API, 
    });

    try {
      const response = await qn.nfts.getByWallet({
        address: addressToFetch,
        first: 5,
      });
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchData(address)}>
        Fetch NFTs by Address
      </button>
      {data && (
        <div>
          <h3>Results:</h3>
          <ImageDisplay data={data} />
          <Tokenbound data={data} />
        </div>
      )}
    </div>
  );
}

export default PullNfts;
