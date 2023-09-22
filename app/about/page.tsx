import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import nkLogo from "@/public/Logo1.jpg";
const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="About Us" description="" />
      <AboutSectionTwo
        imageSrc={nkLogo}
        keyPoints={[
          {
            description: `providing innovative solutions to increase the efficiency of your business through Automation,IoT, Robotics, Vision systems,SPM manufacturing and Software development. `,
            title: "Our Time , Your Service",
          },
          { description: "", title: "" },
          { description: "", title: "" },
        ]}
      />
    </>
  );
};

export default AboutPage;
