import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ToyGallary.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
const ToyGallary = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="mb-10">
        <SectionTitle heading={"My Toy Gallery"}></SectionTitle>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/bXXLzm2/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/vj85YTS/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/YcHnvRt/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/71wCxKp/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-3.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/kg6pRsr/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-4.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/j6qsPpt/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-5.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/2ZLLp4d/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-6.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/GPcFPyW/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-7.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/HNrVh8T/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-8.png"
            alt=""
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default ToyGallary;
