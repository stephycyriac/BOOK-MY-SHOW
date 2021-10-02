//since all pages have same layout ie, navbar and footer; it is named as default.layout

import React from "react";


//components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
const DefaultLayout =(props) =>{
   return (          //navbar above props.children
   <>
        <Navbar/>  
            <HeroCarousel/>
        {props.childern} 
   </>
   );
};

export default DefaultLayout;