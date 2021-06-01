import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use';
import EasyNavbar from '../Home/EasyNavbar'
import BottomFooter from '../Home/BottomFooter'
import './Service.css'
function WebsiteEcom() {
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
                <img src="/images/services1.jpg" className="" />
                <h1>Website & Ecommerce</h1>
            </div>    
                <div className="container-fluid">
                    <h1 className="page-heading">Features</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12   mt-5 ">
                           <div className="webEcom-inner">
                            <h1>1</h1>
                            <h2>Responsive in Multi-device</h2>
                            <p>Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge,
                                 a website, to make it look good on all devices (desktops, tablets, and phones):</p>
                            <h2>Many Type Website Design</h2>
                            <p>Design is the process of collecting ideas and these ideas implementing them. We also involve website 
                                layout, website structure, user interface, navigation, colors, font, image gallery, button styles etc</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12   mt-5">
                           <div className="webEcom-inner">   
                            <h1>2</h1>
                            <h2>Payment Gateway</h2>
                            <p>А payment gateway is the technology that captures and transfers payment data from the customer to the acquire</p>
                            <h2>Api Intregation</h2>
                            <p>the process of creating a means for two or more APIs to share data and communicate with each other without 
                                human interruption</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12  mt-5">
                            <div className="webEcom-inner">
                            <h1>3</h1>
                            <h2>Quick And On-time project</h2>
                            <p>Give our best to make our client happy with quick and on-time project handover  </p>
                            <h2>Domain And Hosting</h2>
                            <p>Web hosting and domain hosting, though closely related, are two different services. 
                                Web hosts allow users to create and store content, like a website, on Internet servers</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className="container mtb-100">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 justify-content-center ">
                        <img src="/images/blueback.jpg" className="webEcom-creative-img" />
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

export default WebsiteEcom
