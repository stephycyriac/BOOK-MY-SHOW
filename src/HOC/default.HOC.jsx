import React from "react";
import { Route } from "react-router-dom";

//layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC =({component:Component, ...rest})=>{ //defining what all are we accepting
return(                    // ...spread operator
    <>
    <Route
    {...rest}
    component = {(props)=>(
        <DefaultLayout>
            <Component {...props}/> 
            </DefaultLayout> 
    )}
    />
    </>
);
};

export default DefaultHOC;