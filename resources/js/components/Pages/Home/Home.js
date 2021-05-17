import React, { useState, useEffect,useInterval } from 'react'
import { useWindowScroll } from 'react-use';
import EasyNavbar from './EasyNavbar'
import WelcomePage from './WelcomePage'
import './Home.css'
import ImageSlide from './ImageSlide'
import Card from './Slider2'
import ProductService from './ProductService'
import ClientArea from './ClientArea'
import KnowContactSec from './KnowContactSec'
import BottomFooter from './BottomFooter'
import Counterup from './Counterup'
import Extraelement from './Extraelement'
import Slider2 from './Slider2'
import { set } from 'lodash';
function Home() {
   const [splash, setSplash] = useState(false);
   const { y: pageYoffset } = useWindowScroll();
   const [visible, setVisible] = useState("shownav");
   const [scrollbutton, setScrollbutton] = useState("nonvisible");
   
   useEffect(() => {
      const timer = setTimeout(() => {
         setSplash(false)
       }, 3500);
      if (pageYoffset > 80 && pageYoffset < 800) {
         setVisible("hidenav")
      }
      else if (pageYoffset > 3000 && pageYoffset < 3800) {
         setVisible("shownav")
      } else {
         setVisible("shownav")
      }
      if(pageYoffset>2500){
         setScrollbutton("visible")
      }else if(pageYoffset<2500){
         setScrollbutton("nonvisible")
      }

      return () => clearTimeout(timer);
     
   }, [pageYoffset]);
   console.log(splash);
   console.log(pageYoffset);
   console.log(visible);
   return (
      <>
       

          {/*splash &&<WelcomePage/>*/}  
          {!splash && <EasyNavbar visible={visible} />}
          {!splash &&<ImageSlide/>}  
          {!splash && <ProductService/> }  
          {!splash &&<ClientArea/>}
          {!splash &&<Counterup/>}
          {!splash &&<KnowContactSec/>}
          {!splash &&<BottomFooter/>}
          {!splash && <Extraelement classname={scrollbutton}/>}
      

       
          
      </>
   )
}

export default Home
