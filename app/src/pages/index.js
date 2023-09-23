import ConnectButton from "../components/wallet"
import Profile from "../components/Profile"
import Tokenbound from "../components/Tokenbound"

export default function Home() {
  return (
    <>
    <div>
    <p>Canoe Creek Dapp</p>
    <p>Sign in with WALLET CONNECT</p>
    </div>
    <div>
    <ConnectButton />
    </div>
    <div>
    <Profile/>
    </div>
    <div>
      <Tokenbound/>
      </div>
    </>
  )
}
