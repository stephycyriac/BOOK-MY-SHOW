import axios from 'axios';
import React, {useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';

//components
import MovieNavbar from '../components/Navbar/MovieNavbar.component';
import MoviePage from "../Pages/Movie.page";

//context
import { MovieContext } from '../contexs/movie.context';

 const MovieLayout = (props) => {
     const {id} = useParams();
     const {movie,setMovie} = useContext(MovieContext);

     useEffect(() => {

        const requestMovie = async() => {
           const getMovieData = await axios.get(`/movie/${id}`);
           setMovie(getMovieData.data);
        };

        requestMovie();
     },[]);
    return (
        <>
             <MovieNavbar/>   
             <MoviePage/>
        {props.childern} 
        </>
    );
};
export default MovieLayout;