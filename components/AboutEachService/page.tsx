"use client";

import React from "react";
import { usePathname } from "next/navigation";
import SectionTitle from "@/components/Common/SectionTitle";
import { returnServiceDetailsBasedOnLinkHref } from "@/components/Utils/data";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionOne from "../About/AboutSectionOne";
import Twak from "@/components/Tawk/page";
function page() {
  const pathname = usePathname();
  const serviceDetails = returnServiceDetailsBasedOnLinkHref(pathname);

  if (serviceDetails.length === 0) {
    return (
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      ></section>
    );
  }
  const { description, linkHref, linkName, icon } = serviceDetails[0];
  return (
    <>
      <Twak />
      <Breadcrumb pageName={linkName} description={description} />
      <AboutSectionOne
        features={serviceDetails[0]?.features ?? []}
        banner={serviceDetails[0]?.banner}
        keyPoints={serviceDetails[0]?.keyPoints ?? []}
      />
    </>
  );
}
export default page;
