import React from 'react';
import Slider from 'react-slick';

//components
import Poster from '../poster/poster.component';

export const Premier = () => {


    const settings = {
        infinity:false,
        autoplay:false,
        slidesToShow:5,
        slidesToScroll:2,
        InitialSlide: 0,
             responsive:[
                 {
                 breakpoints:1024,
                      settings:{
                        slidesToShow:3,
                        slidesToScroll:2,
                        infinite:true,
                               },
                               
                 },
                 {
                    breakpoints:600,
                    settings:{
                      slidesToShow:2,
                      slidesToScroll:2,
                      initialSlide:1,
                             },
                 },
                 {
                    breakpoints:480,
                    settings:{
                      slidesToShow:2,
                      slidesToScroll:1,
                             },
                 },
                        ],
        };

const PremierImages=[
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122455-xgkjwrjntu-portrait.jpg",
        alt:"conjuring",
        title:"The Conjuring: The Devil Made Me Do It",
        subtitle:"English"
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-aqsuauxjnw-portrait.jpg",
        alt:"The Suicide Squad",
        title:"The Suicide Squad",
        subtitle:"English"
    },
    {
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
        alt:"Zack Snyder`s Justice League",
        title:"Zack Snyder`s Justice League",
        subtitle:"English"
    },
    {
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/boss-level-et00312838-22-07-2021-11-34-27.jpg",
        alt:"Boss Level",
        title:"Boss Level",
        subtitle:"English"
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301282-dnzbnayacy-portrait.jpg",
        alt:"Kabullywood",
        title:"Kabullywood",
        subtitle:"Farsi"
    },
];

    return (
        <>
            <Slider{...settings}>
            {PremierImages.map((image)=>(
                <Poster {...image}/>
            ))}
            </Slider>
        </>
    )
}
export default Premier;