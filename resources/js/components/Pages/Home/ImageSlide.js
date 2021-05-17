import React from 'react'
import { Carousel, Card } from 'react-bootstrap';
import './Home.css'
import { useSpring, animated } from 'react-spring'
import './AnimationCss.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const calc = (x, y) => [(y - window.innerHeight / 2) / 20, -(x - window.innerWidth + 3000 / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


function ImageSlide() {


   const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

   SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

   var settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: false
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: false
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: false
            }
         }
      ]

   };


   return (

      <>
         <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}


         >
            <SwiperSlide>
               <div className="easy-carousel-img overlay">
                  <img
                     className="d-block w-img"
                     src="/images/banner_4.png"
                     alt="Third slide"
                  />
                  <p className="slide-text">Easy Retail & Restaurant Business Solutions with our EasyPOS & Restaurant POS Software</p>
                  <animated.button
                     className="slide-btn"
                     onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                     onMouseLeave={() => set({ xys: [0, 0, 1] })}
                     style={{ transform: props.xys.interpolate(trans) }}
                  >Read More...</animated.button>
               </div></SwiperSlide>
            <SwiperSlide>
               <div className="easy-carousel-img overlay">
                  <img
                     className="d-block w-img"
                     src="/images/banner_3.png"
                     alt="Third slide"
                  />
                  <p className="slide-text">Make Your Business More Efficient with Customized ERP Solutions</p>
                  <animated.button
                     className="slide-btn"
                     onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                     onMouseLeave={() => set({ xys: [0, 0, 1] })}
                     style={{ transform: props.xys.interpolate(trans) }}
                  >Read More...</animated.button>
               </div></SwiperSlide>
            <SwiperSlide>
               <div className="easy-carousel-img overlay">
                  <img
                     className="d-block w-img"
                     src="/images/banner.png"
                     alt="Third slide"
                  />
                  <p className="slide-text">Making Business Easy with 
                                          Enterprise Solutions</p>
                  <animated.button
                     className="slide-btn"
                     onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                     onMouseLeave={() => set({ xys: [0, 0, 1] })}
                     style={{ transform: props.xys.interpolate(trans) }}
                  >Read More...</animated.button>
               </div></SwiperSlide>

         </Swiper>
         {/*<Slider {...settings} >
                <div className="easy-carousel-img overlay">
                  <img
                     className="d-block w-img"
                     src="/images/sliderimage1.jpg"
                     alt="Third slide"
                  />   
                  <p className="slide-text">Easy Retail & Restaurant Business Solutions with our EasyPOS & Restaurant POS Software</p>
                  <animated.button
                     className="slide-btn"
                     onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                     onMouseLeave={() => set({ xys: [0, 0, 1] })}
                     style={{ transform: props.xys.interpolate(trans) }}
                  >Read More...</animated.button>
               </div>
               <div className="easy-carousel-img overlay">
                  <img
                     className="d-block w-img"
                     src="/images/sliderimage2.jpg"
                     alt="Third slide"
                  />   
                  <p className="slide-text">Easy Retail & Restaurant Business Solutions with our EasyPOS & Restaurant POS Software</p>
                  <animated.button
                     className="slide-btn"
                     onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                     onMouseLeave={() => set({ xys: [0, 0, 1] })}
                     style={{ transform: props.xys.interpolate(trans) }}
                  >Read More...</animated.button>
               </div>
               <div className="easy-carousel-img overlay">
                  <img
                     className="d-block w-img"
                     src="/images/imageslider3.jpg"
                     alt="Third slide"
                  />   
                  <p className="slide-text">Easy Retail & Restaurant Business Solutions with our EasyPOS & Restaurant POS Software</p>
                  <animated.button
                     className="slide-btn"
                     onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                     onMouseLeave={() => set({ xys: [0, 0, 1] })}
                     style={{ transform: props.xys.interpolate(trans) }}
                  >Read More...</animated.button>
               </div>
                   
                      
                        
                </Slider>
              



                {/*  <Carousel indicators={false} controls={false} slide={true} className="overlay">
            <Carousel.Item >
               <img
                  className="d-block w-img"
                  src="/images/sliderimage1.jpg"
                  alt="First slide"
               />
               <Carousel.Caption className="easy-carousel-img">
                  <p className="slide-text">Easy Retail & Restaurant Business Solutions with our EasyPOS & Restaurant POS Software</p>
                  <animated.button
                     className="cardSlideBtn"
                     onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                     onMouseLeave={() => set({ xys: [0, 0, 1] })}
                     style={{ transform: props.xys.interpolate(trans) }}
                  >Read More...</animated.button>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-img"
                  src="/images/sliderimage2.jpg"
                  alt="Third slide"
               />

               <Carousel.Caption className="easy-carousel-img">
                  <p className="slide-text">Easy Retail & Restaurant Business Solutions with our EasyPOS & Restaurant POS Software</p>
                  <animated.button
                     className="cardSlideBtn"
                     onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                     onMouseLeave={() => set({ xys: [0, 0, 1] })}
                     style={{ transform: props.xys.interpolate(trans) }}
                  >Read More...</animated.button>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-img"
                  src="/images/imageslider3.jpg"
                  alt="Third slide"
               />

               <Carousel.Caption className="easy-carousel-img">
                  <p className="slide-text">Easy Retail & Restaurant Business Solutions with our EasyPOS & Restaurant POS Software</p>
                  <animated.button
                     className="cardSlideBtn"
                     onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                     onMouseLeave={() => set({ xys: [0, 0, 1] })}
                     style={{ transform: props.xys.interpolate(trans) }}
                  >Read More...</animated.button>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel> */}
      </>
   )
}

export default ImageSlide
