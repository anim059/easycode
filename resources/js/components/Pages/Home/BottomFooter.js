import React from 'react'
import './BottomFooter.css'
import { Link,NavLink  } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';
import { BsFillPeopleFill, } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/Fi'
import { AiOutlineInstagram } from 'react-icons/Ai'

function BottomFooter() {
   
    const dateyear = new Date()
    const currentyear = dateyear.getFullYear();

    console.log(currentyear);

    return (
        <>
            <footer className="footer">

                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                                 <div className="col-md-6 col-lg-3 col-sm-12">
                                      <div className="footer_widget">
                                  
                                            <div className="footer_logo">
                                                <a href="#">
                                                    <img src="/images/Easycolde1.png" alt="" width="150" height="50" />
                                                </a>
                                            </div>
                                            <div className="address">

                                               <p>
                                                 Artisan Center  &nbsp;(Level 8), 57/9,
                                                  West Phanthapath,Dhaka-1215, Bangladesh
                                                </p>  
                                            </div>
                                            <div className="socail_links">
                                                <div className="row">
                                                   <div className="d-links-center">
                                                       
                                                       <a href="https://www.facebook.com/EasyCodeBD"><FaFacebook className=" socail_icon"/></a>
                                                       <a href="https://twitter.com/"><FiTwitter className=" socail_icon"/></a>
                                                       <a href="https://www.instagram.com/"><AiOutlineInstagram className=" socail_icon"/></a>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>    
                                    </div> 
                                    <div className="col-md-6 col-lg-3 col-sm-12">
                                        <div className="footer_widget">
                                            <h3 className="footer_title">
                                                Our Software &amp; Services
                                            </h3>
                                            <ul>
                                                <li><Link to="/retailPos" >Easy Retail POS</Link></li>
                                                <li><Link to="/rpos" >Food & Restaurant POS</Link></li>
                                                <li><Link to="/TradingPos" >Trading POS</Link></li>
                                                <li><Link to="/Account" >Easy Accounts</Link></li>
                                                <li><Link to="/SchoolManage" >School Management</Link></li>
                                                <li><Link to="/RealState" >Real Estate</Link></li>
                                                <li><Link to="/ReadyERP" >Easy Ready ERP</Link></li>
                                                <li><Link to="/CustomizeERP" >Customized ERP</Link></li>
                                                <li><Link to="/PayRoll" >Payroll</Link></li>
                                                <li><Link to="/Automobile" >Automobile</Link></li>
                                                <li><Link to="/ProjectManagement">ProjectManagement</Link></li>
                                                <li><Link to="/WebsiteEcom" >Website & E-commerce</Link></li>
                                                <li><Link to="/DigitalMarket" >Digital Marketing</Link></li>
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-sm-12">
                                        <div className="footer_widget">
                                            <h3 className="footer_title">
                                                Useful Links
                                            </h3>
                                            <ul>
                                                <li><Link to="/contact" >Contact</Link></li>
                                                <li><Link to="/about" >About us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-sm-12">
                                        <div className="footer_widget">
                                            <h3 className="footer_title">
                                                Contact
                                           </h3>

                                            <form action="#" className="newsletter_form">
                                                <input type="text" placeholder="Enter your mail" />
                                                <button type="submit">Subscribe</button>
                                            </form>

                                            <p className=" newsletter_text">
                                              Our expert team is always ready  To support your Business
                                              </p>
                                              <ul>
                                                <li><a href="#">info@easycode.com.bd</a></li>
                                                <li><a href="#">masud@easycode.com.bd</a></li>
                                                <li><a href="#">+880 171   2163058</a></li>
                                                
                                            </ul>

                                        </div>
                                    </div>


                             
                        </div>
                    </div>
                </div>
                <div className="copy-right_text">
                    <div className="container">
                        <div className="footer_border"></div>
                              <div className="copy_right text-center">
                                <p>
                                
                                       © {currentyear} All rights reserved  
                                       <a href="/" target="_blank">EasyCode</a>
                                </p>
                                </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default BottomFooter
