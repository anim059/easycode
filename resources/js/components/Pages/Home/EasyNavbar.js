import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import './EasyNavbar.css'
import { Navbar, Nav, Tooltip, OverlayTrigger, NavDropdown, Dropdown, Button, Alert } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'
import './AnimationCss.css'
import { TiThMenuOutline } from 'react-icons/Ti'
import { AiOutlineClose } from 'react-icons/Ai'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 45, (x - window.innerWidth / 2) / 45, 1.1]
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function EasyNavbar({ visible, show }) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 1050, friction: 100 } }))
    const [click, setClick] = useState(false)





    return (
        <>
            <div className="container mb-3">
                <Navbar bg="white" variant="dark" fixed="top" expand="lg" className={`d-flex nav-justify-content-around ${visible}`}>
                    <Navbar.Brand href="#home"><animated.img
                        className="cardlogo"
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                        src="/images/LogoEasyCodemain.png"
                    /></Navbar.Brand>

                    {/*<div className="menu-icon">
                        {click ? <AiOutlineClose className="tggl-btn" onClick={() => setClick(false)} />
                            : <TiThMenuOutline className="tggl-btn" onClick={() => setClick(true)} />}
                    </div>*/}
                    
                    <div className="menu-icon">
                    <input type="checkbox" name="" id="check" onClick={() => setClick(click=>!click)}/>
                        <div class="hamburger-menu-container">
                            <div class="hamburger-menu">
                                <div></div>
                            </div>
                        </div>
                    </div>


                    <div className={click ? 'menu-navbar' : 'menu-navbar active'} id="navbarTogglerDemo01">
                        <Nav className="nav_links">
                            <NavLink to="/" className="nav_text_link nav-link" activeClassName="">Home</NavLink >
                            <li className="nav_dropdown_link dropdown">
                                <a className=" dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Software
                                </a>
                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink" >
                                    <li><Link to="/retailPos" className="navdropdown-item">Easy Retail POS</Link></li>
                                    <li><Link to="/rpos" className=" navdropdown-item">Food & Restaurant POS</Link></li>
                                    <li><Link to="/TradingPos" className="navdropdown-item">Trading POS</Link></li>
                                    <li><Link to="/Account" className=" navdropdown-item">Easy Accounts</Link></li>
                                    <li><Link to="/SchoolManage" className=" navdropdown-item">School Management</Link></li>
                                    <li><Link to="/RealState" className=" navdropdown-item">Real Estate</Link></li>
                                    <li><Link to="/ReadyERP" className=" navdropdown-item">Easy Ready ERP</Link></li>
                                    <li><Link to="/CustomizeERP" className=" navdropdown-item">Customized ERP</Link></li>
                                    <li><Link to="/PayRoll" className=" navdropdown-item">Payroll</Link></li>
                                    <li><Link to="/Automobile" className=" navdropdown-item">Automobile</Link></li>
                                    <li><Link to="/ProjectManagement" className=" navdropdown-item">ProjectManagement</Link></li>
                                </ul>
                            </li>

                            <li className="nav_dropdown_link dropdown">
                                <a className=" dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><Link to="/WebsiteEcom" className=" navdropdown-item">Website & E-commerce</Link></li>
                                    <li><Link to="/DigitalMarket" className=" navdropdown-item">Digital Marketing</Link></li>
                                </ul>
                            </li>

                            <NavLink to="/about" className="nav-link nav_text_link" activeClassName="">About</NavLink >
                            <NavLink to="/contact" className=" nav-link nav_text_link" activeClassName="">Contact us</NavLink >
                        </Nav>
                        <h5 className="nav_contact_link "><OverlayTrigger

                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id='bottom' className="tooltip-text">
                                    +8801712-163058
                                   </Tooltip>
                            }
                        >
                            <Button className="toottip-button">Hotline</Button>
                        </OverlayTrigger></h5>



                    </div>

                </Navbar>

            </div>


        </>
    )
}

export default EasyNavbar
