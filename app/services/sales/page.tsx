"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Twak from "@/components/Tawk/page";
import { returnServiceDetailsBasedOnLinkHref } from "@/components/Utils/data";
import AboutSectionOne from "../../../components/About/AboutSectionOne";

const Sales = () => {
  const pathname = usePathname();
  const serviceDetails = returnServiceDetailsBasedOnLinkHref(pathname);
  const { description, linkHref, linkName, icon } = serviceDetails[0];

  if (serviceDetails.length === 0) {
    return (
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      ></section>
    );
  }
  return (
    <div>
      <Twak />
      <Breadcrumb pageName={linkName} description={description} />
      <AboutSectionOne
        features={serviceDetails[0]?.features ?? []}
        banner={serviceDetails[0]?.banner}
        keyPoints={serviceDetails[0]?.keyPoints ?? []}
        carouselImages={serviceDetails[0]?.carouselImages ?? []}
      />
    </div>
  );
};

export default Sales;
