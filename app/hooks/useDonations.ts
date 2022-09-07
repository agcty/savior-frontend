import { useContract } from "wagmi";

import DonationsAbi from "~/abis/Donations.json";
import type { Donations } from "~/abis/types";

import useSignerOrProvider from "./useSignerOrProvider";

export function useStaking() {
  const signerOrProvider = useSignerOrProvider();
  return useContract<Donations>({
    addressOrName: "",
    contractInterface: DonationsAbi.abi,
    signerOrProvider,
  });
}
