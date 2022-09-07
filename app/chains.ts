import type { Chain } from "wagmi";

const moonscan = {
  name: "Moonscan",
  url: "https://moonriver.moonscan.io",
};

const eth: Chain = {
  id: 1,
  name: "Ethereum",
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
  rpcUrls: {
    default: "https://rpc.api.moonriver.moonbeam.network",
  },
  blockExplorers: {
    default: moonscan,
    etherscan: moonscan,
  },
  network: "moonriver",
};

const chains = [eth];

export default chains;
