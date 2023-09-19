"use client";
import { useTheme } from "next-themes";
import Script from "next/script";
import React from "react";

const index = () => {
  // const { theme, setTheme } = useTheme();

  // React.useLayoutEffect(() => {
  //   setTheme("light");
  // }, []);
  return (
    <div>
      <Script
        src="https://embed.tawk.to/65080cc30f2b18434fd91a4a/1hajn3ngk"
        async
      />
    </div>
  );
};

export default index;
