"use client";

import { ConnectButton, useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useAccount, useSendTransaction } from "wagmi";
import { useEffect } from "react";
import { parseEther } from "viem";

let txCount = 0;

const toAddress = "0x...";
const toAmount = "0.000001";

export default function Home() {
  const { isConnected } = useAccount();
  const { data: txHash, sendTransaction } = useSendTransaction();
  const addRecentTransaction = useAddRecentTransaction();

  useEffect(() => {
    if (txHash) {
      txCount++;

      addRecentTransaction({
        description: `Transaction ${txCount}`,
        hash: txHash,
      });
    }
  }, [txHash]);

  return (
    <div>
      <ConnectButton />

      {isConnected && (
        <button
          onClick={() =>
            sendTransaction({ to: toAddress, value: parseEther(toAmount) })
          }
          style={{ marginTop: "20px" }}
        >
          Send {toAmount} to{" "}
          {toAddress.slice(0, 6) + "..." + toAddress.slice(-4)}
        </button>
      )}
    </div>
  );
}
