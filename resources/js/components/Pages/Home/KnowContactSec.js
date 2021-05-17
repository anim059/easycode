import React from 'react'
import { Link,NavLink  } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


function KnowContactSec() {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 justify-content-center mt-5 ">
                        <div className="KnwCntctText ">
                            <h3>
                                Why our Consulting?
                             </h3>
                            <p>
                                With many years of experience, we know your needs and the steps to fulfill your IT needs.
                                From basic software to complex tailor made ERP, we have it all for you. Our team works extensively
                                to analyze your demand and provide the best solution to make your business easy.
                             </p>
                            <Button className="cardSlideBtn"> <NavLink  to="/about" >About us</NavLink></Button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 center-item mt-5">
                        <img className="KnwCntctImg" src="/images/about1.png" />
                    </div>
                </div>
            </div>



            <IconContext.Provider value={{ size: "3em", color: "white", position: "relative", padding: "5px" }}>
                <div className="single_carousel overlay">
                    <div className="single_testmonial text-center">
                        <div className="quote">
                            <FaQuoteLeft />
                        </div>
                        <div className="testmonial_body">
                            <p>With over 20 years of industry experience, we know exactly what is needed to help better manage your business.
                            We offer you best ITES products and services tailored to meet your requirements.
                            We are glad to welcome you to the world of Digitization in partnership with EasyCode Software.</p>
                        </div>
                        {/*<div className="testmonial_fotter">
                            <h3>Management Team of EaasyCode Software</h3>
                        </div>*/}
                        <br></br>
                        <div className="quote">
                            <FaQuoteRight />
                        </div>
                    </div>
                </div>
            </IconContext.Provider>


            <div className="bg-light-gray">
                <div className="row ">
                    <div className="col-lg-6 col-md-12 col-sm-12 justify-content-center ">
                    <h1 className="mb-5 Query-h1">If any Query</h1>
                            <div className="Contactus-button">
                               <button className="btn btn-primary"><NavLink  to="/contact">Just Email Us</NavLink></button>
                            </div> 
                            {/*
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Your Name" className="Query" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" className="Query" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="number" placeholder="Contact Number" className="Query" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select" className="Query-select ">                                    
                                    <option value="Interested Software or Services">Interested Software or Services</option>
                                    <option value="Easy Retail POS Software">Easy Retail POS Software</option>
                                    <option value="Food &amp; Restaurant POS Software">Food &amp; Restaurant POS Software</option>
                                    <option value="Trading POS Software">Trading POS Software</option>
                                    <option value="School Management Software">School Management Software</option>
                                    <option value="Real Estate Software">Real Estate Software</option>
                                    <option value="Easy Ready ERP Software">Easy Ready ERP Software</option>
                                    <option value="Customized ERP Solutions">Customized ERP Solutions</option>
                                    <option value="Payroll Software">Payroll Software</option>
                                    <option value="Automobile Software">Automobile Software</option>
                                    <option value="Website &amp; E-commerce">Website &amp; E-commerce</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} className="Query-textarea" placeholder="Massage"/>
                                </Form.Group>
                                <Button className="Query-btn" type="submit">
                                    Submit
                                </Button>
                            </Form>
                             */}
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 center-item mt-5">
                        <div className="inner-root">
                            <div className="rootrowfirst"></div>
                            <div className="rootrowsecond"></div>
                            <div className="rootrowfirst"></div>
                            <div className="rootrowsecond"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="infromation_area center overlay">
                <div className="container">

                    <div className="infromation_area_body">
                        <p>For Any Information Call Us</p>
                        <h1>Our expert team is always ready to support your Business</h1>
                        <Button className="contactBtn">+880 1712-163 058</Button>
                    </div>
                    <br></br>

                </div>
            </div>





        </>
    )
}

export default KnowContactSec
