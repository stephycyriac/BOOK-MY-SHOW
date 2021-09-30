import React from "react";
import { Route } from "react-router-dom ";

//layout
import DefaultLayout from "../layouts/default.layout";

const DefaultHOC =({component,...props})=>{ //defining what all are we accepting
return(                    // ...spread operator
    <>
    <Route{...props }/> 
    </>
);
};

export default DefaultHOC;