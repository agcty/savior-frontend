import React from "react";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

import customChains from "~/chains";

const { chains, provider } = configureChains(
  [chain.mainnet, ...customChains],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Donations for Ukraine",
  chains,
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const Web3Provider = ({ children }: { children: React.ReactNode }) => (
  <WagmiConfig client={client}>
    <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
  </WagmiConfig>
);

export default Web3Provider;
