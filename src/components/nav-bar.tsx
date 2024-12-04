import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

export function NavBar() {
  const wallet = useWallet();

  return (
    <div className="flex justify-center">
      <nav className="flex h-16 items-center justify-between bg-background/95 w-2/3 backdrop-blur rounded-2xl shadow-lg bg-zinc-200 p-5 mt-5  ">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2 text-lg font-semibold text-black">
            <div className="size-16 rounded-full  p-2">
              <img src="/g.png" className="size-full rounded-full bg-primary" />
            </div>
            Gaur
          </a>
        </div>
        <div className="flex items-center gap-2">
          {wallet.connected ? (
            <WalletDisconnectButton />
          ) : (
            <WalletMultiButton />
          )}
        </div>
      </nav>
    </div>
  );
}
