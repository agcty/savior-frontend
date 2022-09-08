import { useAccount } from "wagmi";

import { Faqs } from "~/components/Faqs";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import Products from "~/components/Products";
import { Testimonials } from "~/components/Testimonials";

export default function Index() {
  const account = useAccount();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Testimonials />
        <Faqs />
      </main>
    </>
  );
}
