import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeroCarousel=()=>{

  const settingsLG ={        //pc screen
arrows:true,
autoplay:true,
centerMode:true,
centerPadding:"300px",
slidesToShow:1,
infinite: true, 
slidesToScroll: 1
  };

  const  settings = {       //mobile and medium devices
        arrows:true, 
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
const images= [
  "https://images.unsplash.com/photo-1632972116290-7e8fe8f5ab8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1632934376531-544b3614b2f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1632944967234-40fbb88bf7f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1633010999948-35292e91f596?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"

];
return  (
<>
<div className="lg:hidden">  {/*for mobile and medium devices */}
<HeroSlider {...settings}>
  {images.map((image)=> (
    <div className="w-full  h-60 md:h-96 py-3">
      <img src ={image} alt="testing" className="w-full h-full "/>

    </div>
  ))}
</HeroSlider>
</div>


<div className="hidden lg:block">      {/*for large devices */}
<HeroSlider {...settingsLG}>
  {images.map((image)=> (
    <div className="w-full h-96 px-2 py-3 rounded-lg">
      <img src ={image} alt="testing" className="w-full h-full"/>

    </div>
  ))}
</HeroSlider>
</div>
</>
);
};
export default HeroCarousel;