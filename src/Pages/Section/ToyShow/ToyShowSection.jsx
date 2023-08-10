import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./ToyShowSection.css";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

// import required modules
import { Autoplay,  Navigation } from 'swiper/modules';

const ToyShowSection = () => {
  return (
    <div className="my-5">
        <SectionTitle heading={"Show Toy"}></SectionTitle>
      <Swiper   spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay,  Navigation]}
         watchSlidesProgress={true} slidesPerView={3} className="mySwiper">










        <SwiperSlide>
          <img
            src="https://i.ibb.co/CnkYNc8/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-15.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/56VsCYm/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-13.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/LkL3CzX/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-12.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/QMNgjPK/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-11.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/Lxw8TKb/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-3.png"
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
            src="https://i.ibb.co/TYFhJVP/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-8.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/BTvppvS/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-9.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/wQD5Ltm/White-and-Green-Simple-Drift-With-Favorite-Car-Youtube-Thumbnail-10.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ToyShowSection;
