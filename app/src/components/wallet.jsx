import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function ConnectButton() {
  const { open } = useWeb3Modal();

  return (
    <div className="flex flex-col space-y-4 items-center">
      <button 
        onClick={() => open()} 
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition hover:scale-105"
      >
        Open Connect Modal
      </button>
      <button 
        onClick={() => open({ view: 'Networks' })} 
        className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-green-700 hover:via-teal-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition hover:scale-105"
      >
        Open Network Modal
      </button>
    </div>
  );
}
