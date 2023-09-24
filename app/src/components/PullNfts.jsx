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
    <div className="min-h-screen bg-background  flex-width flex-col items-center justify-center py-5">
      <button 
        onClick={() => fetchData(address)}
        className="mb-8 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-secondary"
      >
        Fetch NFTs by Address
      </button>
      {data && (
        <div className="bg-primary p-8 rounded-lg shadow-md w-100">
          <h3 className="text-2xl font-semibold mb-4">Results:</h3>
          <div className="border-b-2 pb-4 mb-4">
            <ImageDisplay data={data} />
          </div>
          <div>
            <Tokenbound data={data} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PullNfts;
