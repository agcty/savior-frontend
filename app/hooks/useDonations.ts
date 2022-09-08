import { ethers } from "ethers";
import { useAccount, useContract, useContractRead, useQuery } from "wagmi";

import DonationsAbi from "~/abis/Donations.json";
import type { Donations } from "~/abis/types";

import useSignerOrProvider from "./useSignerOrProvider";

export function useDonations() {
  const signerOrProvider = useSignerOrProvider();
  return useContract<Donations>({
    addressOrName: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    contractInterface: DonationsAbi.abi,
    signerOrProvider,
  });
}

export function useMyBalance() {
  const donations = useDonations();
  const { isConnected, address } = useAccount();

  return useQuery(
    ["donatedBalance"],
    async () => {
      const data = await donations.users(address!);
      return {
        donatedAmount: ethers.utils.formatEther(data["0"]),
        // redeemedAmount: data["1"],
      };
    },
    {
      enabled: isConnected,
    }
  );
}

export function useMyBalance2() {
  const { isConnected, address } = useAccount();

  const contractRead = useContractRead({
    addressOrName: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    contractInterface: DonationsAbi.abi,
    functionName: "users",
    args: address,
    watch: true,
    enabled: isConnected,
    // args: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  });

  if (contractRead.isSuccess)
    return {
      donatedAmount: ethers.utils.formatEther(contractRead?.data?.["0"]),
    };

  // const data = {
  //   donatedAmount: ethers.utils.formatEther(contractRead.data["0"]),
  // };

  // return data;
}
