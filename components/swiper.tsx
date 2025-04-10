"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const Slides = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000}}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className="swiper-slide-content">
            {/* Lien vers la section "introduction" */}
            <a href="#introduction">
              INTRODUCTION
            </a>
          </div>
        </SwiperSlide>  
        <SwiperSlide>
          <div className="swiper-slide-content">
            {/* Lien vers la section "competences" */}
            <a href="#competences">
              COMPETENCES
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            {/* Lien vers la section "experience" */}
            <a href="#experience">
              EXPERIENCE
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            {/* Lien vers la section "formation" */}
            <a href="#formation">
              FORMATION
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            {/* Lien vers la section "contact" */}
            <a href="#contact">
              CONTACT
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
