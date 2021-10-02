import React from "react";
 
//Components

import EntertainmentCardSlider from "../components/entertainment/entertainmentcard.component";
import Premier from "../components/premier/premier.component";

const HomePage =() =>{
return(
    <>
    <div className="container mx-auto px-4">
    <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment </h1>
    <EntertainmentCardSlider/>
    <Premier/>
    </div>
    </>
);
};

export default HomePage;