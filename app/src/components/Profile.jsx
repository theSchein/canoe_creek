import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import PullNfts from './PullNfts'

export default function Profile() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  if (isConnected)
    return (
      <div>
      <PullNfts address = {address}/>

      </div>
    )
  return <button onClick={() => connect()}>Connect Wallet</button>
}
