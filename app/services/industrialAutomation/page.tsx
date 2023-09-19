"use client";

import React from "react";
import { usePathname } from "next/navigation";
import SectionTitle from "@/components/Common/SectionTitle";
import { returnServiceDetailsBasedOnLinkHref } from "@/components/Utils/data";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutEachService from "@/components/AboutEachService/AboutEachService";

function page() {
  return (
    <>
      <AboutEachService />
    </>
  );
}
export default page;
