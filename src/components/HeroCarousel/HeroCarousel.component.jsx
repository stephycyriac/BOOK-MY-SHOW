import React from "react";
import HeroSlider from "react-slick";

// arrow components
import{ NextArrow, PrevArrow} from "./arrows.components";

const HeroCarousel=()=>{

  const settingsLG ={        //pc screen
arrows:true,
autoplay:true,
centerMode:true,
//centerPadding:"300px",
slidesToShow:1,
infinite: true, 
slidesToScroll: 1,
nextArrow:<NextArrow/>,
prevArrow:<PrevArrow/>,
  };

  const  settings = {       //mobile and medium devices
        arrows:true, 
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
         prevArrow:<PrevArrow/>,
      };
const images= [
  "https://in.bmscdn.com/promotions/cms/creatives/1633111436032_sunburn_cruise_webshowcase_1240x300_1oct.jpg",
  "https://in.bmscdn.com/promotions/cms/creatives/1633099172106_bas_oct21_finalbannerweb1240x300.png",
  "https://in.bmscdn.com/promotions/cms/creatives/1633168004624_indusindcreditcardofferbannerswebshowcase_1240x300.jpg",
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