import React from 'react';

//components
import MovieNavbar from '../components/Navbar/MovieNavbar.component';
import MoviePage from "../Pages/Movie.page";

 const MovieLayout = (props) => {
    return (
        <>
             <MovieNavbar/>  
             <MoviePage/>
        {props.childern} 
        </>
    );
};
export default MovieLayout;