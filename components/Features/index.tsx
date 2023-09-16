import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { services } from "../Utils/data";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Our Comprehensive Services"
            paragraph="At NK Automation Solutions, we provide a wide array of state-of-the-art services meticulously crafted to enhance your industrial operations. Our proficiency spans diverse domains, guaranteeing efficiency, innovation, and excellence in all facets of your enterprise."
            center
            width="800px"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {services.map((each) => (
              <div className="w-full" key={each.linkHref}>
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <Image
                      src={each.icon}
                      alt={'alt'}
                      width={60}
                      height={60}
                      className="w-full dark:hidden"
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    />
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {each.linkName}
                  </h3>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    {each.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
