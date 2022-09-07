import { useProvider, useSigner } from "wagmi";

export default function useSignerOrProvider() {
  const { data: signer } = useSigner();
  const provider = useProvider();

  return signer || provider;
}
