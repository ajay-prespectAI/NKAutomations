import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import nkLogo from "@/public/Logo1.jpg";
const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
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
