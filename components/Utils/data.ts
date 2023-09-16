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

export const services: FooterNS.Services[] = [
  {
    linkHref: "/services/industrialAutomation",
    linkName: "Industrial Automation",
    description:
      "Optimize manufacturing with our advanced industrial automation. Streamline operations, boost efficiency, and cut costs.",
    icon: industrialAutomationIcon,
  },
  {
    linkHref: "/services/SCADAAndIoT",
    linkName: "SCADA & IoT",
    description:
      "Gain real-time insights, optimize resources, and secure operations with SCADA & IoT integration",
    icon: SCADAAndIOTIcon,
  },
  {
    linkHref: "/services/CNCRefurbishment",
    linkName: "CNC Refurbishment",
    description:
      "Prolong CNC Machinery Life and Boost Performance with Our Expert Refurbishment Services. Achieve Precision, Reliability, and Cost-Efficiency in Machining.",
    icon: cncIcon,
  },
  {
    linkHref: "/services/visionSystemsAndRobotics",
    linkName: "Vision Systems & Robotics",
    description:
      "Future-Proof Your Manufacturing: Elevate Quality, Automate, and Boost Efficiency with Vision Systems and Robotics",

    icon: RoboticsIcon,
  },
  {
    linkHref: "/services/Sales",
    linkName: "Sales",
    description:
      "Let our expert sales support services propel your business forward. From training to consulting, we're dedicated to enhancing your sales performance.",
    icon: SalesIcon,
  },
];
