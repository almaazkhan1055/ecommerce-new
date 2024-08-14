import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import ContentWrapper from "../components/wrapper";
import AllProducts from "../products/page";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Hero />
      <ContentWrapper>
        <Carousel />
        <AllProducts />
      </ContentWrapper>
    </>
  );
};

export default Home;
