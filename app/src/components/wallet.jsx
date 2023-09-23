import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()

  return (
    <>
      <button onClick={() => open()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open Connect Modal</button>
      <button onClick={() => open({ view: 'Networks' })} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open Network Modal</button>
    </>
  )
}