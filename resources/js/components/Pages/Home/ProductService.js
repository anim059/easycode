import React from 'react'
import { Link,NavLink  } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import {GiShoppingCart} from 'react-icons/Gi'
import {AiOutlineStock} from 'react-icons/Ai'
import {AiOutlineShop} from 'react-icons/Ai'
import {MdAccountBalance} from 'react-icons/Md'
import {BsBook} from 'react-icons/Bs'
import {AiOutlineHome} from 'react-icons/Ai'
import {BsPeople} from 'react-icons/Bs'
import {FaRegLightbulb} from 'react-icons/Fa'
import {SiCashapp} from 'react-icons/Si'
import {AiOutlineCar} from 'react-icons/Ai'
import {CgWebsite} from 'react-icons/Cg'
import {AiOutlineSound} from 'react-icons/Ai'

function ProductService() {
    return (
        <>

            <div className="home_product_sctn_heading">
               <h1>Our Products & Services</h1>
            </div>
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
                        <Card className="product-card-width">
                           <GiShoppingCart className="product-rounded-full mt-2" ></GiShoppingCart>
                            <Card.Body className="center">
                                <Card.Title className="product-title">Easy Retail POS</Card.Title>
                                <Card.Text className="product-body-text">
                                Point of Sales software for all sorts of retail business.
        
                                </Card.Text>
                                <h1 className="product-btn-text"><Link to="/retailPos" className="linkCss">Learn More</Link></h1>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
                    <Card className="product-card-width">
                            <AiOutlineShop className="product-rounded-full mt-2"></AiOutlineShop>
                            <Card.Body className="center">
                                <Card.Title className="product-title">Food & Restaurant POS</Card.Title>
                                <Card.Text className="product-body-text">
                                Our Restaurant POS puts you to ease of mind for your Restaurant Business will evrything you need in one software.
        
                                </Card.Text>
                                <h1 className="product-btn-text"><Link to="/rpos" className="linkCss">Learn More</Link></h1>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
                    <Card className="product-card-width">
                            <AiOutlineStock className="product-rounded-full mt-2"></AiOutlineStock>
                            <Card.Body className="center">
                                <Card.Title className="product-title">Trading POS</Card.Title>
                                <Card.Text className="product-body-text">
                                Our Trading POS(Point of Sales) Software control any Trading business
        
                                </Card.Text>
                                <h1 className="product-btn-text"><Link to="/TradingPos" className="linkCss">Learn More</Link></h1>
                            </Card.Body>
                        </Card>
                    </div>
                    {/*<div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
                        <Card className="product-card-width">
                        <MdAccountBalance className="product-rounded-full mt-2" ></MdAccountBalance>
                            <Card.Body className="center">
                                <Card.Title className="product-title">Easy Accounts</Card.Title>
                                <Card.Text className="product-body-text">
                                Accounting software to ease your Bookkeeping and Final Accounts Preparation with control in your fingertips
        
                                </Card.Text>
                                <h1 className="product-btn-text">Learn More</h1>
                            </Card.Body>
                        </Card>
                    </div>*/}
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
                    <Card className="product-card-width">
                    <BsBook className="product-rounded-full mt-2"></BsBook>
                            <Card.Body className="center">
                                <Card.Title className="product-title">School Management</Card.Title>
                                <Card.Text className="product-body-text">
                                All in one School Management Software for total control of you Educational Institute Management.
        
                                </Card.Text>
                                <h1 className="product-btn-text"><Link to="/SchoolManage" className="linkCss">Learn More</Link></h1>
                            </Card.Body>
                        </Card>
                    </div>
                   {/*<div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
                    <Card className="product-card-width">
                    <AiOutlineHome className="product-rounded-full mt-2" ></AiOutlineHome>
                            <Card.Body className="center">
                                <Card.Title className="product-title">Easy Ready ERP</Card.Title>
                                <Card.Text className="product-body-text">
                                Make your business operations more efficient with our ERP Solution Software.
        
                                </Card.Text>
                                <h1 className="product-btn-text">Learn More</h1>
                            </Card.Body>
                        </Card>
                    </div>*/}
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
                        <Card className="product-card-width">
                        <BsPeople className="product-rounded-full mt-2"></BsPeople>
                            <Card.Body className="center">
                                <Card.Title className="product-title">Customized ERP Solution</Card.Title>
                                <Card.Text className="product-body-text">
                                Make your business operations more efficient with our ERP Solution tailor made to your requirments.
        
                                </Card.Text>
                                <h1 className="product-btn-text"><Link to="/CustomizeERP" className="linkCss">Learn More</Link></h1>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
                    <Card className="product-card-width">
                    <FaRegLightbulb className="product-rounded-full mt-2" ></FaRegLightbulb>
                            <Card.Body className="center">
                                <Card.Title className="product-title">Easy HR & Payroll</Card.Title>
                                <Card.Text className="product-body-text">
                                Maintain your Payroll with the ease of our Payroll Software.
        
                                </Card.Text>
                                <h1 className="product-btn-text"><Link to="/PayRoll" className="linkCss">Learn More</Link></h1>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
                    <Card className="product-card-width">
                    <SiCashapp className="product-rounded-full mt-2" ></SiCashapp>
                            <Card.Body className="center">
                                <Card.Title className="product-title">Easy Real State</Card.Title>
                                <Card.Text className="product-body-text">
                                All in one Real Estate Software for total control of you Real Estate Management.
                                </Card.Text>
                                <h1 className="product-btn-text"><Link to="/RealState" className="linkCss">Learn More</Link></h1>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
                    <Card className="product-card-width">
                    <AiOutlineCar className="product-rounded-full mt-2" ></AiOutlineCar>
                            <Card.Body className="center">
                                <Card.Title className="product-title">Easy Automobile</Card.Title>
                                <Card.Text className="product-body-text">
                                Maintain your Automobile Business records more precisely for better management.
                                </Card.Text>
                                <h1 className="product-btn-text"><Link to="/Automobile" className="linkCss">Learn More</Link></h1>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-2">
                    <Card className="product-card-width">
                    <CgWebsite className="product-rounded-full mt-2" ></CgWebsite>
                            <Card.Body className="center">
                                <Card.Title className="product-title">Easy Project Management</Card.Title>
                                <Card.Text className="product-body-text">
                                All in one Project Management Software for total control of you Institute Management.
                                </Card.Text>
                                <h1 className="product-btn-text"><Link to="/ProjectManagement" className="linkCss">Learn More</Link></h1>
                            </Card.Body>
                        </Card>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default ProductService
