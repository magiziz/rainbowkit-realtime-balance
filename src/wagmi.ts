import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import { base, optimism } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",
  chains: [base, optimism],
  transports: {
    [base.id]: http(process.env.NEXT_PUBLIC_HTTP_BASE_URL),
    [optimism.id]: http(process.env.NEXT_PUBLIC_HTTP_OPTIMISM_URL),
  },
  ssr: true,
});
