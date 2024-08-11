import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import AllProducts from "@/components/products/page";
import ContentWrapper from "@/components/wrapper";
import React from "react";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContentWrapper>
        <AllProducts />
      </ContentWrapper>
    </div>
  );
};

export default Page;
