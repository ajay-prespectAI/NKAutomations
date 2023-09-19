import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne: React.FC<FooterNS.IAboutSectionOne> = ({
  features,
  banner,
  keyPoints,
}) => {
  const List = ({ text, description }) => (
    <div className="w-100% mb-5 flex flex-row flex-wrap items-center gap-2">
      <p className="flex  items-center text-lg font-semibold text-dark">
        <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span>
        {`${text} - `}
      </p>
      <p className="ml-40px  mt-4px  mbs-5  text-lg font-medium text-body-color">
        {description}
      </p>
    </div>
  );

  console.log({ banner });

  return (
    <section id="about">
      <div className="container">
        <div className=" w-100%   flex-1  bg-primary bg-opacity-5 p-16">
          <div
            className="wow fadeInUp w-100% relative mx-auto aspect-[30/15] max-w-[1000px]  flex-1 bg-primary bg-opacity-5 pt-16"
            data-wow-delay=".2s"
            style={{
              borderRadius: "20px",
            }}
          >
            <Image
              src={banner}
              alt="about-image"
              fill
              className="mx-auto max-w-full lg:mr-0"
              style={{
                borderRadius: "20px",
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: "60px" }}></div>
        <div className="mt-100px border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20   lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 ">
              {features.map((each, index) => {
                return (
                  <p
                    key={index}
                    className="mb-4 text-base !leading-relaxed text-body-color md:text-lg"
                  >
                    {each}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="wow fadeInUp mb-12  " data-wow-delay=".15s">
            <div className="mx-[-12px] flex flex-wrap">
              <div className=":w-full w-full px-3 ">
                {keyPoints &&
                  keyPoints?.map((each) => {
                    return (
                      <List
                        key={each.title}
                        text={each.title}
                        description={each.description}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
