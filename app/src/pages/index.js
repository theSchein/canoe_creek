import ConnectButton from "@/components/wallet"
import Profile from "@/components/Profile"

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
    <Profile/>
    </>
  )
}
