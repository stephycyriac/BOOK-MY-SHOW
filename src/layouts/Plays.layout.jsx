import React from "react";
//components
//import MovieNavbar from "../components/Navbar/MovieNavbar.component";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import Plays from "../Pages/Plays.page";

const PlaysLayout = (props) => {
    return (
        <>
         <Navbar/>
         <HeroCarousel/>
          <Plays/>  
          {props.childern} 
        </>
    )
}

export default PlaysLayout;
