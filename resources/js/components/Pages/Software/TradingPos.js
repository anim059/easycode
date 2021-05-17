import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use';
import EasyNavbar from '../Home/EasyNavbar'
import BottomFooter from '../Home/BottomFooter'
import './Software.css'
import { ListGroup, Card } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function R_possoft() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
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
       if(pageYoffset>1900){
          setScrollbutton("visible")
       }else if(pageYoffset<1900){
          setScrollbutton("nonvisible")
       }
 
    }, [pageYoffset]);
    console.log(pageYoffset);
    console.log(visible);
    return (
       
        <>
             { <EasyNavbar visible={visible} />}
            <div className="food-res-bg-img food-res-bg-overlay">
                <h1>Trading Pos</h1>
            </div>
            <div className="container R-pos-circle-bg">
                <h1 className="tradepos-heading">About Trading Pos</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 justify-content-center">
                        <img src="/images/tradingpos.jpeg" className="R-pos-image" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 center-item">
                       
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item Rpos-text">Easy To Use</li>
                            <li class="list-group-item Rpos-text">User Friendly Design</li>
                            <li class="list-group-item Rpos-text">Having Many Features</li>
                            <li class="list-group-item Rpos-text">A Software Help Your Bussiness To Grow More</li>
                            <li class="list-group-item Rpos-text">Have All kind Of Report Service</li>
                            <li class="list-group-item Rpos-text">Login and Security Available</li>
                            <li class="list-group-item Rpos-text">Management Your Inventory Well</li>
                            <li class="list-group-item Rpos-text">Management Your Purchase Well</li>
                            <li class="list-group-item Rpos-text">Many Types of Payment System</li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
            </div>
            
            {/*<div className="container mb-5">
                <h1 className="top-heading">Demo of Trading-POS Software</h1>
                    <Slider {...settings}>

                        <img variant="top" src="/softwareimages/R-pos-image1.jpeg" className="feature-img"/>
                        <img variant="top" src="/softwareimages/R-pos-image1.jpeg" className="feature-img"/>
                        <img variant="top" src="/softwareimages/R-pos-image1.jpeg" className="feature-img"/>
                        <img variant="top" src="/softwareimages/R-pos-image1.jpeg" className="feature-img"/>
                        <img variant="top" src="/softwareimages/R-pos-image1.jpeg" className="feature-img"/>
                        <img variant="top" src="/softwareimages/R-pos-image1.jpeg" className="feature-img"/>
                        <img variant="top" src="/softwareimages/R-pos-image1.jpeg" className="feature-img"/>
                        <img variant="top" src="/softwareimages/R-pos-image1.jpeg" className="feature-img"/>


                    </Slider>
                    
            </div>*/}
            <BottomFooter/>
        </>
    )
}

export default R_possoft
