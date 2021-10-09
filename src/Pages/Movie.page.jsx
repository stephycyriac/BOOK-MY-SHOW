
import {FaCcVisa , FaCcApplePay} from "react-icons/fa";
import React,{useContext,useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";
//config
import TempPosters from "../config/TempPosters.config";

//components
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.components";

//context
import { MovieContext } from "../contexs/movie.context";



 const MoviePage = () => {
const {id} = useParams(); 
const {movie} = useContext(MovieContext) ;
const [cast,setCast] = useState([]);
const [similarMovies,setSimilarMovies] = useState([]);
const [recommended,setRecommended] = useState([]);


useEffect(() => {

    const requestCast = async() => {
         const getCast = await axios.get(`/movie/${id}/credits`);
         setCast(getCast.data.cast);
    };
    requestCast();
} , [id]);


useEffect(() => {
    const requestSimilarMovies = async () => {
  const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
  setSimilarMovies(getSimilarMovies.data.results); 
    };
  
    requestSimilarMovies(); 
  } , [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
  const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
  setRecommended(getRecommendedMovies.data.results); 
    };
  
    requestRecommendedMovies(); 
  } , [id]);

    const settings = { 
        infinity:false,
        autoplay:false,
        slidesToShow:4,
        slidesToScroll:2,
        InitialSlide: 0,
             responsive:[
                 {
                 breakpoints:1024,
                      settings:{
                        slidesToShow:4,
                        slidesToScroll:2,
                        infinite:true,
                               },
                               
                 },
                 {
                    breakpoints:600,
                    settings:{
                      slidesToShow:2,
                      slidesToScroll:2,
                      initialSlide:1,
                             },
                 },
                 {
                    breakpoints:480,
                    settings:{
                      slidesToShow:2,
                      slidesToScroll:1,
                             },
                 },
                        ],
        };
        const settingsCast = { 
            infinity:false,
            autoplay:false,
            slidesToShow:6,
            slidesToScroll:2,
            InitialSlide: 0,
                 responsive:[
                     {
                     breakpoints:1024,
                          settings:{
                            slidesToShow:4,
                            slidesToScroll:2,
                            infinite:true,
                                   },
                                   
                     },
                     {
                        breakpoints:600,
                        settings:{
                          slidesToShow:4,
                          slidesToScroll:2,
                          initialSlide:1,
                                 },
                     },
                     {
                        breakpoints:480,
                        settings:{
                          slidesToShow:2,
                          slidesToScroll:1,
                                 },
                     },
                            ],
            };
    
    return (
        <>
           <MovieHero/>
<div className="my-5  container  px-4 lg:ml-20 lg:w-2/3">
    <div className="flex flex-col items-start gap-3">
    <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
    <p>{movie.overview }</p>
    </div>
    
<div className="my-8">
<hr/>
</div>

<div className="my-8 ">
<h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h2>
<div className="flex flex-col gap-3 lg:flex-row">
<div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md " >
<div className="w-8 h-8">
<FaCcVisa className="w-full h-full"/>

</div>
   <div className="flex flex-col items-start ">
   <h3 className="text-gray-700 text-xl font-bold">
       Visa Stream Offers
   </h3>
   <p className="text-gray-600">
   Get 50% off up to INR 150 with Visa cards on BookMyShow Stream
   </p>
</div>
</div>
<div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md " >
<div className="w-8 h-8">
<FaCcApplePay className="w-full h-full"/>

</div>
   <div className="flex flex-col items-start ">
   <h3 className="text-gray-700 text-xl font-bold">
       Filmy Pass
   </h3>
   <p className="text-gray-600">
   Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
</div>
</div>
</div>
</div>
<div className="my-8 ">
<div className="my-8">
<hr/>
</div>
<h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew</h2>
    <Slider {...settingsCast}>
    {cast.map((castdata) => (
    <Cast image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
           castName={castdata.original_name}
           role={castdata.character}
           />
           ))}
   </Slider>
</div>
<div className="my-8">
<hr/>
</div>
<div className="my-8">
<PosterSlider
     config = {settings}
    images={similarMovies} 
    title="You might also like" 
    isDark={false}/>
</div>
<div className="my-8">
<hr/>
</div>
<div className="my-8">
<PosterSlider
     config = {settings}
    images={recommended} 
    title="BMS XCLUSIV" 
    isDark={false}/>
</div>
</div>
     </>   
    );
};
export default MoviePage; 