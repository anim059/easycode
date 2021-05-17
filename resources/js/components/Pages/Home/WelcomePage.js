import React from 'react'
import EasyNavbar from './EasyNavbar'
import { Spinner,Card } from 'react-bootstrap'
import './WelcomePage.css'

function WelcomePage() {
    return (
        <>
            
            <div className='splash'>
                <h3>Easy<span>Code</span></h3>
            </div>



            {/*<div className='splash'>
                <Card className='splash-card'>
                    <Card.Img variant="top" src="/images/easycodelogo.jpg" />
                    <Card.Body>
                        <Spinner animation="border" variant="info" className="welcome-sniper" />
                    </Card.Body>
                </Card>
                
                
              </div>*/}
        </>
    )
}

export default WelcomePage
