import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import AllProducts from "@/app/products/page";
import ContentWrapper from "@/app/components/wrapper";
import React from "react";
import Carousel from "./components/carousel";
import Footer from "./components/footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ContentWrapper>
        <Carousel />
        <AllProducts />
        <Footer />
      </ContentWrapper>
    </>
  );
};

export default Page;
