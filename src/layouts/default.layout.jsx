//since all pages have same layout ie, navbar and footer; it is named as default.layout
 

//components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
//import EntertainmentCardSlider from "../components/entertainment/entertainmentcard.component";
import HomePage from "../Pages/home.page";
//import premier from "../components/premier/premier.component";
const DefaultLayout =(props) =>{
   return (          //navbar above props.children
   <>
        <Navbar/>  
            <HeroCarousel/>
            <HomePage/>


        {props.childern} 
   </>
   );
};

export default DefaultLayout;