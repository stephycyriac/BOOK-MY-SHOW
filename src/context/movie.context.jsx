import React,{Children, useState} from "react";

const MovieContext = React.createContext();

const MovieProvider = ({childern}) => {

    const [movie,setMovie] = useState({
        id:0,
        original_title: "",
        overview:"",
        backdrop_path:"",
        poster_path:"",
    });

    return(
        <MovieContext.Provider value={{movie,setMovie}}>
            {children}
        </MovieContext.Provider>
    );
};