import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./CaroBanner.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const CaroBanner = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/rH1d50b/miniature-diecast-vehicle-toys-cars-auto.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/LZt2bV8/miniature-car-diecast-toy-royalty-free-thumbnail.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/n81n4Vz/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-14.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/R9pdsrQ/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-15.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/mJ9mDw5/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-16.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/VMv9G9Q/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-19.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/XFVTf9k/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-18.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/kMNtZrT/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-17.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CaroBanner;
