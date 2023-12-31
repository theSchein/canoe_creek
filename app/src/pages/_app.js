import { createWeb3Modal } from '@web3modal/wagmi/react'
import { walletConnectProvider } from '@web3modal/wagmi'

import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { mainnet, baseGoerli } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import Layout from '../components/layout'

import './styles/global.css';

// 1. Get projectId
const projectId = '2824e083d63be1672175b30c949cc831'

// 2. Create wagmiConfig
const { chains, publicClient } = configureChains([mainnet, baseGoerli], [walletConnectProvider({ projectId })])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({ options: { projectId, showQrModal: false } }),
    new InjectedConnector({ options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({ options: { appName: 'Web3Modal' } })
  ],
  publicClient
})

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-font-family': 'Bold, comic-sans',
    '--w3m-accent-color': '#B0D9B1'} }
    )
  

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
  </WagmiConfig>
  )
}
