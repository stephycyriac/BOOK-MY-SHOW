import React from 'react'
import PlaysFilter from '../components/PlaysFilter/PlaysFilter.components';


//components
import Poster from '../components/poster/poster.component';
const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4"> 
                        <h2 className="text-2xl font-bold mb-4">Plays in Kochi</h2>
                   
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315289-grgxssxpeh-portrait.jpg"
                        title="Dineout SteppinOut Movie Nights"
                        subtitle ="Engish --> ₹499"
                        />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315289-grgxssxpeh-portrait.jpg"
                        title="Dineout SteppinOut Movie Nights"
                        subtitle ="Engish --> ₹499"
                        />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315289-grgxssxpeh-portrait.jpg"
                        title="Dineout SteppinOut Movie Nights"
                        subtitle ="Engish --> ₹499"
                        />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315289-grgxssxpeh-portrait.jpg"
                        title="Dineout SteppinOut Movie Nights"
                        subtitle ="Engish --> ₹499"
                        />
                        </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-3/12"> 
                    <h2 className="text-2xl font-bold mb-4 ">Filters</h2>
                   <div>
                        <PlaysFilter 
                        title="Date" tags={["Today","Tomorrow","This Weekend"]} />
                         <PlaysFilter 
                        title="Language" tags={["Tamil","English","Malayalam"]} />
                         <PlaysFilter 
                        title="Categories" tags={["Theatre"]} />
                         <PlaysFilter 
                        title="Genres" tags={["Drama","Comedy"]} />
                         <PlaysFilter 
                        title="More Filters" tags={["Online Streaming","Outdoor Events"]} />
                         <PlaysFilter 
                        title="Price" tags={["Free","0-500","501-2000","Above 2000"]} />
                   </div>
                   <div className="border-2 border-red-400 py-1 mt-4 rounded-md" >
                       <h4 className="text-red-400 text-center">Browse by Venue</h4>
                   </div>
                 </div>
                </div>
            </div>
        </>
    );
};

export default Plays;
