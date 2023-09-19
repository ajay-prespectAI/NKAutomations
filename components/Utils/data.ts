export const footerQuickLinks: FooterNS.IFooterLinks[] = [
  {
    linkHref: "/",
    linkName: "Home",
  },
  {
    linkHref: "/about",
    linkName: "About",
  },
];

export const supportLinks: FooterNS.IFooterLinks[] = [
  {
    linkHref: "/contact",
    linkName: "Contact Us",
  },
];

import industrialAutomationIcon from "../../public/images/industrialAutomation.svg";
import SCADAAndIOTIcon from "../../public/images/SCADAAndIOT.svg";
import RoboticsIcon from "../../public/images/Robotics.svg";
import SalesIcon from "../../public/images/Sales.svg";
import cncIcon from "../../public/images/cnc.svg";

import iotScadaBanner from "../../public/images/iot.jpg";
import cncBanner from "../../public/images/cncBanner.jpg";
import VisionSystemsRoboticsBanner from "../../public/images/VisionSystemsRoboticsBanner.jpg";

import industrialAutomationBanner from "../../public/images/IndustrialAutomationBanner.jpg";

export const services: FooterNS.Services[] = [
  {
    linkHref: "/services/industrialAutomation",
    linkName: "Industrial Automation",
    description:
      "Optimize manufacturing with our advanced industrial automation. Streamline operations, boost efficiency, and cut costs.",
    icon: industrialAutomationIcon,
    features: [
      "In the contemporary industrial landscape, the imperative for efficient processes has propelled manufacturing industries to embrace automation. Our pioneering and comprehensive approach, encompassing cutting-edge technologies and services, is dedicated to automating manufacturing processes. This transformation enhances production rates, reliability, and product quality while simultaneously reducing errors and mitigating the costs associated with human operators.",
      "Our suite of automation solutions encompasses a wide array of devices, including PLCs, VFDs, HMIs, SCADA systems, CNC machinery, and Machine Vision systems. We offer products from renowned brands, including industry giants like Siemens, Mitsubishi, and Delta. Our services are engineered to deliver heightened productivity, elevated product quality, flexibility, precise information management, and heightened safety measures.",
      "Embrace the future of industrial automation with us, where efficiency, innovation, and excellence converge to redefine manufacturing operations.",
    ],
    banner: industrialAutomationBanner,
    keyPoints: [
      {
        title: "24/7 Operations",
        description:
          "Automated systems can work around the clock, ensuring continuous production and minimizing downtime.",
      },
      {
        title: "Enhanced Precision",
        description:
          "Automation systems can perform tasks with high precision and accuracy, reducing errors and improving product quality.",
      },
      {
        title: "Cost Savings",
        description:
          "By reducing labor costs, minimizing material wastage, and optimizing energy usage, industrial automation often leads to significant cost savings over time.",
      },
      {
        title: "Increased Efficiency",
        description:
          "Industrial automation streamlines processes, reducing manual labor and cycle times, which results in improved overall efficiency and productivity.",
      },
      {
        title: "Safety",
        description:
          "Automation can handle dangerous tasks, improving workplace safety by reducing the exposure of workers to hazardous conditions.",
      },
      {
        title: "Scalability",
        description:
          " Automation systems can be easily scaled up or down to accommodate changes in production demand, providing flexibility for business growth.",
      },
      {
        title: "Data Insights",
        description:
          "Automation generates vast amounts of data that can be used for analysis and decision-making, helping businesses make informed choices for process optimization.",
      },
      {
        title: "Consistency",
        description:
          "Automated processes perform tasks consistently, reducing variability and ensuring that products meet quality standards every time.",
      },
      {
        title: "Competitive Advantage",
        description:
          " Embracing industrial automation can give your business a competitive edge by improving production speed and product quality.",
      },
      {
        title: "Environmental Impact",
        description:
          "By optimizing resource usage and reducing waste, automation can have a positive impact on the environment through lower energy consumption and reduced emissions.",
      },
      {
        title: "Remote Monitoring and Control",
        description:
          "Automation systems often allow for remote monitoring and control, enabling businesses to manage operations from anywhere.",
      },
      {
        title: "Compliance",
        description:
          "Automation can help ensure that processes adhere to industry regulations and standards, reducing compliance risks.",
      },
      {
        title: `Customization`,
        description:
          " Automation solutions can be tailored to meet the specific needs of different industries and applications.",
      },
    ],
  },
  {
    linkHref: "/services/SCADAAndIoT",
    linkName: "SCADA & IoT",
    description:
      "Gain real-time insights, optimize resources, and secure operations with SCADA & IoT integration",
    icon: SCADAAndIOTIcon,
    features: [
      "Vital for monitoring and controlling critical infrastructure.",
      "Recent security incidents highlight the need for enhanced SCADA security.",
      "Security risk analysis and solutions are imperative for protection.",
      "Rapid adoption of IoT devices in critical infrastructure and control systems.",
      "Modern SCADA systems face increased performance and scalability demands.",
      "Cloud computing and edge data centers (fog architectures) ensure efficient data management and security.",
    ],
    banner: iotScadaBanner,
    keyPoints: [
      {
        title: "Increased Efficiency",
        description: "Optimized processes for higher operational efficiency.",
      },
      {
        title: "Reduced Errors",
        description: "Minimized potential for human errors through automation.",
      },
      {
        title: "Predictive Maintenance",
        description: "Proactive scheduling to prevent costly downtime.",
      },
      {
        title: "Enhanced Safety",
        description: "Implementation of safety measures to reduce risks.",
      },
      {
        title: "Cost Reduction",
        description:
          " Improved processes and maintenance lead to long-term cost savings.",
      },
      {
        title: "Real-Time Monitoring",
        description:
          "Gain instant visibility into your operations, enabling quick decision-making.",
      },
      {
        title: "Remote Accessibility",
        description:
          " Access and control systems remotely, increasing operational flexibility.",
      },
    ],
  },
  {
    linkHref: "/services/CNCRefurbishment",
    linkName: "CNC Refurbishment",
    description:
      "Prolong CNC Machinery Life and Boost Performance with Our Expert Refurbishment Services. Achieve Precision, Reliability, and Cost-Efficiency in Machining.",
    icon: cncIcon,
    features: [
      "We specialize in CNC Breakdown and Repair services, dedicated to optimizing your machine's performance. Our primary focus is addressing CNC machine breakdowns, and we strive to respond within a swift 24-hour timeframe.",
      "With a decade of experience under our belt, we bring extensive expertise in both hydraulic and pneumatic systems. This unique blend of knowledge positions us as a dependable and trusted partner, capable of delivering top-notch CNC Breakdown and Repair solutions.",
      "Our client base spans a diverse range of businesses, including some of the leading manufacturers in powertrains and transmission systems within their respective industries.",
      "At the heart of our mission is a commitment to surpassing client expectations, fostering enduring relationships. Many of our valued customers have remained loyal for over four years, a testament to our dedication and excellence in service.",
    ],
    banner: cncBanner,
    keyPoints: [
      {
        title: "Minimized Downtime",
        description:
          "Our rapid response ensures that your CNC machine downtime is minimized, helping you maintain productivity.",
      },
      {
        title: "Expertise in Hydraulic and Pneumatic Systems",
        description:
          " With a decade of experience under our belt, we bring extensive expertise in both hydraulic and pneumatic systems, ensuring comprehensive repair and maintenance solutions.",
      },
      {
        title: "Trusted Partner:",
        description:
          " Our unique blend of knowledge positions us as a dependable and trusted partner, capable of delivering top-notch CNC Breakdown and Repair solutions.",
      },
      {
        title: "Industry Versatility",
        description:
          " Our client base spans a diverse range of businesses, including some of the leading manufacturers in powertrains and transmission systems within their respective industries.",
      },
      {
        title: "Long-Lasting Relationships",
        description:
          " At the heart of our mission is a commitment to surpassing client expectations, fostering enduring relationships. Many of our valued customers have remained loyal for over four years, a testament to our dedication and excellence in service.`,",
      },
    ],
  },
  {
    linkHref: "/services/visionSystemsAndRobotics",
    linkName: "Vision Systems & Robotics",
    description:
      "Future-Proof Your Manufacturing: Elevate Quality, Automate, and Boost Efficiency with Vision Systems and Robotics",

    icon: RoboticsIcon,
    features: [
      "We offer affordable, user-friendly vision products for robot guidance and inspection. Our solutions streamline component alignment, product location, and feedback to robots. They enhance quality, yield, and enable 100% quality checks for large sub-assemblies.",
      "Our unique vision solutions cover a wide range of features, assisting robots in viewing, picking, and inspecting. Flexible cameras and sensors optimize automated robot control, with seamless integration supported by our expert team.",
      "Our vision guidance systems easily integrate with major robot manufacturers, simplifying the process. We provide both 2D and 3D systems for advanced robot guidance. Our high-precision cameras ensure accuracy and come with a powerful interface for real-time data and production insights.",
      "Empower flexible manufacturing, locate unfixed parts accurately, and communicate seamlessly with robots. Eliminate costly fixtures, prevent collisions, and handle multiple parts without tooling changes.",
    ],
    banner: VisionSystemsRoboticsBanner,
    keyPoints: [
      {
        title: "Versatile Vision Solutions",
        description:
          "Our unique vision solutions cover a wide range of features, enabling robots to view, pick, and inspect with precision.",
      },
      {
        title: "Flexibility and Adaptability",
        description:
          "Flexible cameras and sensors optimize automated robot control, making production adaptable to changing needs.",
      },
      {
        title: "Seamless Integration",
        description:
          "Our systems integrate effortlessly with major robot manufacturers, simplifying setup and reducing integration challenges.",
      },
      {
        title: "Advanced 2D and 3D Guidance",
        description:
          "Benefit from both 2D and 3D systems for advanced robot guidance, providing versatility in applications.",
      },
      {
        title: " High Precision",
        description:
          "Our cameras offer one of the highest precision levels available, ensuring accuracy and reliability in automated robot control.",
      },
      {
        title: "Real-time Insights",
        description:
          "The powerful vision interface provides real-time positional data, statistics, and production information for informed decision-making.",
      },
      {
        title: `Cost Savings:`,
        description:
          " Eliminate the need for costly precision fixtures, reduce the risk of robot collisions, and handle multiple parts without tooling changeovers.",
      },
    ],
  },
  {
    linkHref: "/services/Sales",
    linkName: "Sales",
    description:
      "Let our expert sales support services propel your business forward. From training to consulting, we're dedicated to enhancing your sales performance.",
    icon: SalesIcon,
  },
];

export const returnServiceDetailsBasedOnLinkHref = (
  locationHref: string
): FooterNS.Services[] => {
  return services.filter((each) => each.linkHref === locationHref);
};
