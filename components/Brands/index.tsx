import { Brand } from "@/types/brand";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const brandsData: Brand[] = [
  {
    id: 2,
    name: "",
    href: "https://tailgrids.com",
    image: "/images/customers/2.jpg",
    height: 140,
    width: 100,
  },
  {
    id: 1,
    name: "",
    href: "https://uideck.com",
    image: "/images/customers/1.png",
    height: 90,
    width: 160,
  },
  {
    id: 3,
    name: "",
    href: "https://lineicons.com",
    image: "/images/customers/3.png",
    height: 140,
    width: 100,
  },
  {
    id: 4,
    name: "",
    href: "https://graygrids.com",
    image: "/images/customers/4.png",
    height: 90,
    width: 140,
  },
];

const Brands = () => {
  return (
    <section
      // className="pt-16"
      className="bg-white/[.03] py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div
          className={`wow fadeInUp mx-auto w-full text-center`}
          data-wow-delay=".1s"
          style={{ marginBottom: "80px" }}
        >
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            We work with Industry Leaders
          </h2>
        </div>
        <div className="-mx-4 w-full px-4">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10vw",
              flexWrap: "wrap",
            }}
          >
            {brandsData.map((brand) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name, height, width } = brand;
  return (
    <div
      className={`relative  cursor-pointer  opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100`}
    >
      <Image
        src={image}
        alt={name}
        style={{
          minHeight: height,
          minWidth: width,
        }}
        height={height}
        width={width}
      />
    </div>
  );
};
