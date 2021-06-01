import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use';
import EasyNavbar from '../Home/EasyNavbar'
import BottomFooter from '../Home/BottomFooter'
import './Service.css'
function DigitalMarket() {
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
            <div className="container-fluid webEcom-bg webEcom-bg-overlay">
                <img src="/images/services2.jpg" className="" />
                <h1>Digital Market</h1>
            </div>    
                <div className="container-fluid">
                <h1 className="page-heading">Features</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12   mt-5 ">
                           <div className="webEcom-inner">
                            <h1>1</h1>
                            <h2>Keyword Research and Reporting</h2>
                            <p>Keyword research is the process of 
                                understanding the language your target customers use when searching for your products, services, and content</p>
                            <h2> Digital Marketing Consultancy</h2>
                            <p>Digital marketing consultancy is all about helping businesses and brands to achieve their goals online.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12   mt-5">
                           <div className="webEcom-inner">   
                            <h1>2</h1>
                            <h2>Social Media Advertising</h2>
                            <p>Social media marketing is the use
                                 of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic</p>
                            <h2>SEO Intregation</h2>
                            <p>To achieve long-lasting, quality results, SEO needs to be integrated into your overall 
                                marketing strategy. SEO is vital to the first stage of RACE - reach</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12  mt-5">
                            <div className="webEcom-inner">
                            <h1>3</h1>
                            <h2>Graphic Design Assistance</h2>
                            <p>As a graphic design assistant, it is your job to help the 
                                lead graphic designer complete all print, online, and electronic media projects</p>
                            <h2>Blog Link Assistene</h2>
                            <p>Blogs also promote reader engagement. Readers have a chance to comment 
                                and voice their different concerns and thoughts to the community</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className="container mtb-100">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 justify-content-center ">
                        <img src="/images/digitalmarketing.jpg" className="webEcom-creative-img" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 center-item mt-5">
                        <div class="creative_part_text">
                            <h2>We work hard and think creatively</h2>
                            <p>
                                There winged grass midst moving earth seed herb fifth you
                                multiply you divide cattle stars first cattle.
                           </p>
                            <span>“There winged grass midst moving earth seed herb fifth you
                             multiply you divide cattle stars first cattle.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cta_part">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="cta_iner">
                                <h1>Let’s create something awesome together</h1>
                                <a href="#" class="btn_1">Discuss project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomFooter />
        </>
    )
}

export default DigitalMarket
