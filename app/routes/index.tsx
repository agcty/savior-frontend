import { useAccount } from "wagmi";

import { Faqs } from "~/components/Faqs";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";

export default function Index() {
  const account = useAccount();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Faqs />
      </main>
    </>
  );
}
