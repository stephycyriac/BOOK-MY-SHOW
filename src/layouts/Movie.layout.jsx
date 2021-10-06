import React, {useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';

//components
import MovieNavbar from '../components/Navbar/MovieNavbar.component';
import MoviePage from "../Pages/Movie.page";

//context
import {MovieContext} from "../context/movie.context"

 const MovieLayout = (props) => {
     const {id} = useParams();
    return (
        <>
             <MovieNavbar/>   
             <MoviePage/>
        {props.childern} 
        </>
    );
};
export default MovieLayout;