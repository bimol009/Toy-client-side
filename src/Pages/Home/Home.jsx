import React from "react";
import GallerySection from "../GallarySection/GallerySection";
import UseTitle from "../HookPageTitle/UseTitle";
import ReactTabs from "../ReactTabs/ReactTabs";
import DemoSection from "../Section/DemoSection/DemoSection";
import MySection from "../Section/MySection";
import StyleToySection from "../Section/StyleToySection";
import ToyGallary from "../Section/ToyGallary/ToyGallary";
import ToyShowSection from "../Section/ToyShow/ToyShowSection";
import UniqueSection from "../Section/UniqueSection/UniqueSection";
import ViewSection from "../Section/ViewSecrion/ViewSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import Banner from "./Banner/Banner";
import BannerSection from "./CaroBanner/BannerSection";

import CaroBanner from "./CaroBanner/CaroBanner";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <Banner></Banner>
    
      <BannerSection></BannerSection>
      <GallerySection></GallerySection>
      <CaroBanner></CaroBanner>
      <ReactTabs></ReactTabs>
      <MySection></MySection>
      <ToyGallary></ToyGallary>
      <StyleToySection></StyleToySection>
      <ToyShowSection></ToyShowSection>
      <DemoSection></DemoSection>
      <ViewSection></ViewSection>
      <UniqueSection></UniqueSection>
      <TestimonialSection></TestimonialSection>
    </div>
  );
};

export default Home;
