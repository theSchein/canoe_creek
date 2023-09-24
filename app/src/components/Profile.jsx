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
      <div className='flex-col items-center justify-center py-12'>
        <PullNfts address={address} />
      </div>
    )

  return <button onClick={() => connect()} classname=" mb-8 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-secondary">Attach Wallet</button>
}
