import { render } from 'react-dom'
import React, { useState, useEffect, useMemo } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';






function Slider2() {

  // Render the grid
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
       
        
      >
        <SwiperSlide><img
          className="d-block w-img"
          src="/images/imageslider3.jpg"
          alt="Third slide"
        /> </SwiperSlide>
        <SwiperSlide><img
          className="d-block w-img"
          src="/images/imageslider3.jpg"
          alt="Third slide"
        /> </SwiperSlide>
        <SwiperSlide><img
          className="d-block w-img"
          src="/images/imageslider3.jpg"
          alt="Third slide"
        /> </SwiperSlide>
        <SwiperSlide><img
          className="d-block w-img"
          src="/images/imageslider3.jpg"
          alt="Third slide"
        /> </SwiperSlide>
      ...
    </Swiper>
    </>
  )



}

export default Slider2
