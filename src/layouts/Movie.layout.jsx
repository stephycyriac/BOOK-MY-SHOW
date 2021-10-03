import React from 'react';

//components
import Navbar from "../components/Navbar/navbar.component";

 const MovieLayout = (props) => {
    return (
        <>
             <Navbar/>  
            
        {props.childern} 
        </>
    );
};
export default MovieLayout;