import React from "react";
import { Route } from "react-router-dom";

//layout
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC =({component:Component, ...rest})=>{ //defining what all are we accepting
return(                    // ...spread operator
    <>
    <Route
    {...rest}
    component = {(props)=>(
        <MovieLayout>
            <Component {...props}/> 
            </MovieLayout> 
    )}
    />
    </>
);
};

export default MovieHOC;