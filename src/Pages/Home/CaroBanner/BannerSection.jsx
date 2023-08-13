import "./CaroBanner.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const BannerSection = () => {
  return (
    <div>
      <div className="text-center mt-10 mb-10">
        <h2 className="text-4xl mb-3 font-extrabold">
          Caro <span className="text-red-400">Section</span> Toy
        </h2>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/YygqNhJ/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-11.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/WnWv68S/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-10.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/pyY789s/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-9.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/vJ780q5/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-8.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/N2dksSQ/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-7.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSection;
