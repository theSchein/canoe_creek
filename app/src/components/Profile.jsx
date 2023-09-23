import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import PullNfts from './PullNfts'
import { useState, useEffect } from 'react'

export default function Profile() {
  const { address, isConnected: isConnectedFromWagmi } = useAccount()
  const [isConnected, setIsConnected] = useState(false)
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  useEffect(() => {
    setIsConnected(isConnectedFromWagmi)
  }, [isConnectedFromWagmi])

  if (isConnected)
    return (
      <div>
        <PullNfts address={address} />
      </div>
    )

  return <button onClick={() => connect()}>Connect Wallet</button>
}
