import React,{useState ,useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";
// arrow components
import{ NextArrow, PrevArrow} from "./arrows.components";

const HeroCarousel=()=>{

const [images , setImages] = useState([]);
useEffect(()=> {
const requestNowPlayingMovies = async () => {
  const getImages = await axios.get("/movie/now_playing");
  setImages(getImages.data.results);
};

requestNowPlayingMovies();

},[] )
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
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
         prevArrow:<PrevArrow/>,
      };

return  (
<>
<div className="lg:hidden">  {/*for mobile and medium devices */}
<HeroSlider {...settings}>
  {images.map((image)=> (
    <div className="w-full  h-60 md:h-96 py-3">
      <img src ={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full "/>

    </div>
  ))}
</HeroSlider>
</div>


<div className="hidden lg:block">      {/*for large devices */}
<HeroSlider {...settingsLG}>
  {images.map((image)=> (
    <div className="w-full h-96 px-2 py-3 rounded-lg">
      <img src ={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full"/>
               {/* base url from tmdb for images  */}
    </div>
  ))}
</HeroSlider>
</div>
</>
);
};
export default HeroCarousel;