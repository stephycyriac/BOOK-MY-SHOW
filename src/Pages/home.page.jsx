import React from "react";
 
//Components

import EntertainmentCardSlider from "../components/entertainment/entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.components";
//config
import TempPosters from "../config/TempPosters.config";

const HomePage =() =>{
return(
    <>
 <div className="flex flex-col gap-16">
 <div className="container mx-auto px-4">
    <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment </h1>
    <EntertainmentCardSlider/>
    </div>
    
  <div className="bg-premierbg-700 py-12 "> 
 
<div className="container mx-auto px-4 flex flex-col gap-3">
<div className="hidden  md:flex"> 
<div>
<img src=" https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
     alt="premier" className="w-full h-full"/>
</div>

  </div>
<PosterSlider images={TempPosters} title="Premieres" subtitle="Brand new releases every friday" isDark/>
</div>
  </div>
 </div>

 {/* online streaming events */}
<div className="container mx-auto px-4 my-8">
   <PosterSlider images={TempPosters} 
    title="Online Streaming Events" 
    isDark={false}/>
</div>

<div className="container mx-auto px-4 my-8">
   <PosterSlider images={TempPosters} 
    title="Outdoor Events" 
    isDark={false}/>
</div>
<div className="container mx-auto px-4 my-8">
   <PosterSlider images={TempPosters} 
    title="Laughter Therapy" 
    isDark={false}/>
</div>
<div className="container mx-auto px-4 my-8">
   <PosterSlider images={TempPosters} 
    title="Popular Events" 
    isDark={false}/>
</div>
<div className="container mx-auto px-4 my-8">
   <PosterSlider images={TempPosters} 
    title="Top Games & Sport Events" 
    isDark={false}/>
</div>
<div className="container mx-auto px-4 my-8">
   <PosterSlider images={TempPosters} 
    title="Explore Fun Activites" 
    isDark={false}/>
</div>
    </>
);
};

export default HomePage;