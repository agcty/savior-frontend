import { useContract } from "wagmi";

import NFTabi from "~/abis/NFT.json";
import type { NFT } from "~/abis/types";

import useSignerOrProvider from "./useSignerOrProvider";

export function useERC721() {
  const signerOrProvider = useSignerOrProvider();
  return useContract<NFT>({
    addressOrName: "0xa513e6e4b8f2a923d98304ec87f64353c4d5c853",
    contractInterface: NFTabi.abi,
    signerOrProvider,
  });
}
