import Image from "next/image";

const AboutSectionTwo: React.FC<FooterNS.IAboutSectionTwo> = ({
  imageSrc,
  keyPoints,
}) => {
  return (
    <section className="my-8">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className=" mx-auto w-full  px-4 lg:w-1/2">
            <Image
              src={imageSrc}
              alt="about image"
              style={{
                maxWidth: "400px",
                maxHeight: "400px",
                margin: "auto",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[800px]" data-wow-delay=".2s">
              {keyPoints.map((each) => {
                return (
                  <div className="mb-9">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      {each.title}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      {each.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
