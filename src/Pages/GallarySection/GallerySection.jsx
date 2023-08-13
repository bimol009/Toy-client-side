import  { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./GallerySection.css";
import { EffectCreative } from "swiper/modules";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";

const GallerySection = () => {
  return (
   <div>
    <SectionTitle heading={"Toy Slide"}></SectionTitle>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
      <div>
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-125%", 0, -800],
              rotate: [0, 0, -90],
            },
            next: {
              shadow: true,
              translate: ["125%", 0, -800],
              rotate: [0, 0, 90],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper5"
        >
          <SwiperSlide>
            {" "}
            <img
              src="https://i.ibb.co/v4Kt3WG/fahad-bin-kamal-anik-QLaa3a-Ypwv8-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://i.ibb.co/Gc6HTY3/atish-sewmangel-NYb-Tdr-Bh740-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://i.ibb.co/v4Kt3WG/fahad-bin-kamal-anik-QLaa3a-Ypwv8-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://i.ibb.co/rQM81Ng/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src="https://i.ibb.co/rQM81Ng/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src="https://i.ibb.co/rQM81Ng/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [180, 0, 0],
            },
            next: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [-180, 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper4"
        >
               <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/XFVTf9k/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-18.png" />
        </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/rH1d50b/miniature-diecast-vehicle-toys-cars-auto.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img src="https://i.ibb.co/kMNtZrT/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-17.png" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="https://i.ibb.co/XFVTf9k/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-18.png" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://i.ibb.co/v4Kt3WG/fahad-bin-kamal-anik-QLaa3a-Ypwv8-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://i.ibb.co/rQM81Ng/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src="https://i.ibb.co/rQM81Ng/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img
              src="https://i.ibb.co/rQM81Ng/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
   </div>
  );
};

export default GallerySection;
