import type { Chain } from "wagmi";

const moonscan = {
  name: "Moonscan",
  url: "https://moonriver.moonscan.io",
};

const localhost: Chain = {
  id: 1335,
  name: "Anvil Localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
  rpcUrls: {
    default: "http://127.0.0.1:8545",
  },
  blockExplorers: {
    default: moonscan,
    etherscan: moonscan,
  },
  network: "ethereum",
};

const customChains = [localhost];

export default customChains;
