import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use';
import { Form, Col, Button } from 'react-bootstrap'
import { BsHouseDoor } from 'react-icons/Bs'
import { RiContactsBook2Line } from 'react-icons/Ri'
import { AiOutlineMail } from 'react-icons/Ai'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './Contact.css'
import EasyNavbar from '../Home/EasyNavbar'
import Iframe from 'react-iframe'
import BottomFooter from '../Home/BottomFooter'
import emailjs from 'emailjs-com';
import { Alert } from 'bootstrap';
import swal from 'sweetalert';





function Map() {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }} />

    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Contact() {
    const { y: pageYoffset } = useWindowScroll();
    const [visible, setVisible] = useState("shownav");
    const [scrollbutton, setScrollbutton] = useState("nonvisible");
    const [massage, setMassage] = useState({})
    const [alert, setAlert] = useState(false)
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
    console.log(pageYoffset);
    console.log(visible);
    console.log(alert);

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_p2ow37u', 'template_qwwlezd', e.target, 'user_eIDu6ZMAhiiE2qQJptlQK')
            .then((result) => {
                console.log(result.text);
                setAlert(true)
            }, (error) => {
                console.log(error.text);
                
            });
        e.target.reset()
    }

  
    const showAlert=()=>{

        swal({
            title: "Successfully Email Send!",
            text: "Thank You For Contacting With Us",
            icon: "success",
          });

          setTimeout(() =>{
            setAlert(false)
          },2000 );
          
     }
    return (
        <>
            { <EasyNavbar visible={visible} />}
            <div className="Contact-top-Image Contact-overlay">
                <h1>Contact us</h1>
            </div>

            <div className="Container">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58430.422019737736!2d90.38426189999998!3d23.750896100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x196b377634cd4f96!2sEasy%20Code%20Software!5e0!3m2!1sen!2sbd!4v1577858828470!5m2!1sen!2sbd"

                    id="myId"
                    className="myClassname"
                    allowfullscreen=""></Iframe>
            </div>
            <div className="container">
                <div className="center contact-heading">
                    <h1>Get In Touch</h1>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <Form className="form-body" onSubmit={sendEmail}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <Form.Group controlId="formBasicEmail">
                                            <input type="text" name="subject" placeholder="subject" className="Contact" required/>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <Form.Group controlId="formBasicEmail">
                                            <input type="text" name="name" placeholder="Your Name" className="Contact" required/>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <Form.Group controlId="formBasicEmail">
                                            <input type="text" name="companyName" placeholder="Company Name" className="Contact" required/>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <Form.Group controlId="formBasicEmail">
                                            <input type="email" placeholder="Email" className="Contact" name="email" required/>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <Form.Group controlId="formBasicEmail">
                                            <input type="number" placeholder="Contact Number" className="Contact" name="contact" required/>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={5} col={4} className="Contact-textarea" placeholder="Massage" name="message" required/>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <select as="select" className="Contact-select " name="typeSelect" required>
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
                                </select>
                            </Form.Group>

                            <button className="Contact-btn" type="submit" >
                                Submit
                                </button>
                        </Form>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">

                        <div className="media contact-info">
                            <BsHouseDoor className="contact-icon" />
                            <div className="media-body">
                                <h3>Artisan Center  (Level 8),
                                57/9, West Phanthapath,
                                    </h3>
                                <p>Dhaka-1215, Bangladesh</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <RiContactsBook2Line className="contact-icon" />
                            <div className="media-body">
                                <h3>+880 167 6609028</h3>
                                <p>Sat to Thu 10am to 7pm</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <AiOutlineMail className="contact-icon" />
                            <div className="media-body">
                                <h3>info@easycode.com.bd</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {alert && showAlert()}
            <BottomFooter/>

            {/*
                <div style={{width:'100vw',height:'100vw'}}>
                    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                        AIzaSyBZlCgMUT8kR-1vR8puyNzmyXNsn6RoQqE}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                </div>
           */}


        </>
    )
}

export default Contact
