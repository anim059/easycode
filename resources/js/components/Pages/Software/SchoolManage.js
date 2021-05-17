import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use';
import EasyNavbar from '../Home/EasyNavbar'
import BottomFooter from '../Home/BottomFooter'


function SchoolManage() {
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
           
          
           <div className="ComSofware-round-bg ">
           <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-12 col-md-12 col-sm-12 justify-content-center ">
                    <h1 className="mb-5 mt-5 ComSofware-Query-h1"> Easy School Management </h1>
                            <div className="ComSofware-button">
                               <h1>Sorry for not showing any information now</h1>
                               <h4>For information please contact</h4>
                               <button className="btn btn-primary">+880-171-2163058</button>
                            </div>                           
                    </div>
                </div>
                </div> 
            </div>
        <BottomFooter/>    
        </>
    )
}

export default SchoolManage
