import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use';
import EasyNavbar from '../Home/EasyNavbar'
import { BsArrowRightShort } from 'react-icons/Bs'
import './About.css'
import ClientArea from '../Home/ClientArea'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BottomFooter from '../Home/BottomFooter'
import { useSpring, animated } from 'react-spring'

import { Card, Button } from 'react-bootstrap'



function About() {
    const { y: pageYoffset } = useWindowScroll();
    const [visible, setVisible] = useState("shownav");
    const [scrollbutton, setScrollbutton] = useState("nonvisible");
    useEffect(() => {
        if (pageYoffset > 80 && pageYoffset < 800) {
            setVisible("hidenav")
        }
        else if (pageYoffset > 3000 && pageYoffset < 3800) {
            setVisible("shownav")
        } else {
            setVisible("shownav")
        }
        if (pageYoffset > 1900) {
            setScrollbutton("visible")
        } else if (pageYoffset < 1900) {
            setScrollbutton("nonvisible")
        }

    }, [pageYoffset]);


    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
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
            { <EasyNavbar visible={visible} />}

            <div className="about-bg-image about-overlay">
                <h1>About Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img src="/images/about-qoute.jpg" className="about-quote-img" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="row justify-content-start py-5">
                            <div className="col-lg-12 heading-section fadeInUp">
                                <span className="heading-title">EasyCode</span>
                                <h1 className="heading-text">Welcome to EasyCode Software Company</h1>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                <div className="service-wrap">
                                    <div className="service-list">
                                        <h1>Gutter cleaning</h1>
                                        <div className="btn-custom d-flex align-item-center justify-content-center">
                                            <span><BsArrowRightShort /></span>
                                        </div>
                                    </div>
                                    <div className="service-list">
                                        <h1>Gutter cleaning</h1>
                                        <div className="btn-custom d-flex align-item-center justify-content-center">
                                            <span><BsArrowRightShort /></span>
                                        </div>
                                    </div>
                                    <div className="service-list">
                                        <h1>Gutter cleaning</h1>
                                        <div className="btn-custom d-flex align-item-center justify-content-center">
                                            <span><BsArrowRightShort /></span>
                                        </div>
                                    </div>
                                    <div className="service-list">
                                        <h1>Gutter cleaning</h1>
                                        <div className="btn-custom d-flex align-item-center justify-content-center">
                                            <span><BsArrowRightShort /></span>
                                        </div>
                                    </div>
                                    <div className="service-list">
                                        <h1>Gutter cleaning</h1>
                                        <div className="btn-custom d-flex align-item-center justify-content-center">
                                            <span><BsArrowRightShort /></span>
                                        </div>
                                    </div>
                                    <div className="service-list">
                                        <h1>Gutter cleaning</h1>
                                        <div className="btn-custom d-flex align-item-center justify-content-center">
                                            <span><BsArrowRightShort /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className="team-heading">We are</h1>
            <div className="team-slider">
                <Slider {...settings}>

                  

                    <Card className="team-slider-width">
                            <Card.Img variant="top" src="/images/member1.jpg" className="team-member-image"/>
                            <Card.Body>
                                <Card.Title>Team Member </Card.Title>
                                <Card.Text className="team-member-qoute">
                                    We Help you Improve Productivity
                               </Card.Text>
                                
                            </Card.Body>
                        </Card>
                   
                   
                    <Card className="team-slider-width">
                            <Card.Img variant="top" src="/images/member2.jpg" className="team-member-image"/>
                            <Card.Body>
                                <Card.Title>Team Member </Card.Title>
                                <Card.Text className="team-member-qoute">
                                    We Help you Improve Productivity
                               </Card.Text>
                               
                            </Card.Body>
                        </Card>
                 
                      
                </Slider>
                </div>
            </div>

            <ClientArea />
            <BottomFooter />


        </>
    )
}

export default About;
