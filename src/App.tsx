import { useMemo } from "react";
import "./App.css";
import { NavBar } from "./components/nav-bar";
import SwapInterface from "./components/swap";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <div className="bg-[#1b0724]">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <NavBar></NavBar>
            <div className="text-neutral-200 mt-10 flex flex-col items-center justify-center">
              <p>
                Letting people know how
                does  Liquid Staking Tokens work
              </p>
              <p>The <span className=" text-yellow-500">GAUR</span> token is of 2x price of SOL</p>
              <p>Therefore, if you gave 1 SOL you will get back <span className=" text-red-400">2 GAUR</span></p>
              <p>
              Switch your wallet to DevNet, and you’re all set to explore the power of liquid staking!
              </p>

              <p>Made by agastya ❤️</p>
            </div>
            <SwapInterface></SwapInterface>

            <div className="text-neutral-500 flex flex-col items-center justify-center">
              <p>Made by Agastya</p>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}
export default App;
