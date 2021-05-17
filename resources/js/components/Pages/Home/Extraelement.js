import React, { useState, useEffect } from 'react'
import { BiArrowToTop } from 'react-icons/Bi'
import MessengerCustomerChat from 'react-messenger-customer-chat';

function Extraelement({ classname }) {
    const ScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <div className="scroll-container ">
                <div className="indicator">
                    <BiArrowToTop className={`scroll-to-top ${classname}`} onClick={ScrollTop} />
                </div>

            </div>
            <div>
                <MessengerCustomerChat 
                    pageId="101737155217146"
                    appId="1076996009431698"
                />
            </div>

        </>
    )
}

export default Extraelement
