import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import AllProducts from "@/app/products/page";
import ContentWrapper from "@/components/wrapper";
import React from "react";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ContentWrapper>
        <AllProducts />
      </ContentWrapper>
    </>
  );
};

export default Page;
