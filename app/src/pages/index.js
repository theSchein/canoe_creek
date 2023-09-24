import ConnectButton from "../components/wallet";
import Profile from "../components/Profile";
import ImageTile from "../components/ImageTile";
import NounsTile from "../components/NounsTile";

export default function Home() {
  return (
    <div className="bg-primary text-quaternary font-body min-h-screen p-8">
      <div className="text-center mb-8">
        <p className="text-4xl mb-2">Canoe Creek Dapp</p>
        <p className="text-xl">Sign in with WALLET CONNECT</p>
      </div>

      <div className="text-center mb-8">
        <ConnectButton />
      </div>

      <div className="mb-8">
        <Profile />
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <NounsTile  />
        <ImageTile img="/hokusai_ipfs/fishin.png" />
        <ImageTile img="/monet_ipfs/1.png" />
      </div>
    </div>
  );
}
