import { useAccount } from "wagmi";

import { useERC721 } from "~/hooks/useMint";

import { Button } from "./Button";

const products = [
  {
    id: 1,
    name: "Crypto Stars",
    href: "#",
    price: "0.1 ETH",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s168",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Rekt Arrows",
    href: "#",
    price: "0.1 ETH",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://openseauserdata.com/files/7b0c87d3326e91e267fbb190d3fd1d7f.gif",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 3,
    name: "BitBears",
    href: "#",
    price: "0.3 ETH",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://lh3.googleusercontent.com/y2GShs-0jXmEm3585tIGVQRWthk3-eCaFZ36mbl-kyNPzo0qh3T3P_fu42XI4NAfeeitBewCpgj0ZExEkDU30XQ5bWMd5gWdzFJdvw=w600",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 4,
    name: "Sneaky Worlds",
    href: "#",
    price: "0.1 ETH",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://lh3.googleusercontent.com/FHa6d3hpgtMexRhDQQB3g9VfUo0p0dyOd5JVHlMi5bneX6Oc0qB_XdOVDMTlYgXQUz7Gvc51lhC2MVa4QeSFzKYJswCvIELdV-mUVJU=s168",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 5,
    name: "NY@Night",
    href: "#",
    price: "0.2 ETH",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://openseauserdata.com/files/ff9a23f0b44c507dee128950daab5c5e.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 6,
    name: "Simple Drawings",
    href: "#",
    price: "1 ETH",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://lh3.googleusercontent.com/vb20I7MpI0O6-b8mexl3HtLB3RnDZYfppi_0ZSRblnLekBYXGcMQtVc6pMAyUcyiANiYFYx0__gYcL8EpZ-6qjRR3fbNWKnbs4RSoA=s168",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];

export default function Products() {
  const erc721 = useERC721();
  const { address } = useAccount();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Our exclusive NFTs
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Do something good, climb up the leaderboard, and mint some of the most
          exclusive NFTs.
        </p>
        <h2 className="sr-only"> Our exclusive NFTs</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 mt-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {/* <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a> */}
                </h3>
                <p className="text-sm text-gray-500">
                  {/* {product.description} */}
                  One of our exclusive NFTs to mint, {product.name} is exlsusive
                  to our platform.
                </p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">
                    {product.options}
                  </p>
                  <p className="text-base font-medium text-gray-900">
                    {product.price}
                  </p>
                  <Button
                    className="mt-4"
                    color="blue"
                    onClick={() => {
                      erc721.mintTo(address!);
                    }}
                  >
                    Claim
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
