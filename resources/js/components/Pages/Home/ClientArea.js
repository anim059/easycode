import React from 'react';
import ReactDOM from 'react-dom';
import { } from 'react-bootstrap';

import InfiniteCarousel from 'react-leaf-carousel';


import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';



function ClientArea() {

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

    return (
        <>
            <div className="container">
                <div className="HappyclientSec">
                    <img className="centerImg" src="/images/happyclient.jpg" />
                    <h1>Our Happy Client</h1>
                </div>
                <div className="ClientImageSlide mb-5">
                   <Swiper 
                spaceBetween={50}
                slidesPerView={5}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

                breakpoints={{
                    // when window width is >= 640px
                    100: {
                        width:400,
                        slidesPerView: 3,
                      },
                    400: {
                        width:500,
                        slidesPerView: 3,
                      },
                    640: {
                      width:500,
                      slidesPerView: 4,
                    },
                    // when window width is >= 768px
                    1024: {
                        width:1100,
                      slidesPerView: 6,
                    },
                  }}


            >
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/celebrations.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/archies.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/Extreme.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/foodplate.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/Hallmark.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/Hallmarkmain.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide  >
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/ORVIS.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/RACE.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/richpoint.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/SEW.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/sheangel.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/SURAT.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/kasmeri.jpeg"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide  >
                <SwiperSlide className="client-position">
                    <div>
                        <img
                            alt=""
                            src="/images/ORVIS.png"
                            className="clientImg"
                        />
                    </div>
                </SwiperSlide>

            </Swiper>
            </div>

            </div>
            {/*  <div className="container">
                <div className="HappyclientSec">
                    <img className="centerImg" src="/images/happyclient.jpg" />
                    <h1>Our Happy Client</h1>
                </div>
                <div className="ClientImageSlide">
                    <InfiniteCarousel
                        breakpoints={[
                            {
                                breakpoint: 450,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,

                                },
                            },
                        ]}
                        dots={false}
                        showSides={true}
                        sidesOpacity={1}
                        sideSize={0.1}
                        slidesToScroll={1}
                        slidesToShow={5}
                        scrollOnDevice={true}
                        swipe={true}
                        autoCycle={true}
                        cycleInterval={4500}
                        lazyLoad={true}
                    >
                        <div>
                            <img
                                alt=""
                                src="/images/happyclient.jpg"
                                className="clientImg"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                src="/images/happyclient.jpg"
                                className="clientImg"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                src="/images/happyclient.jpg"
                                className="clientImg"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                src="/images/happyclient.jpg"
                                className="clientImg"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                src="/images/happyclient.jpg"
                                className="clientImg"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                src="/images/happyclient.jpg"
                                className="clientImg"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                src="/images/happyclient.jpg"
                                className="clientImg"
                            />
                        </div>
                        <div>
                            <img
                                alt=""
                                src="/images/happyclient.jpg"
                                className="clientImg"
                            />
                        </div>

                    </InfiniteCarousel>,
            </div>

            </div>
         */}


        </>
    )
}

export default ClientArea
