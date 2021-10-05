import React from "react";
import {BiChevronRight , BiSearch,BiMenu ,BiChevronDown} from "react-icons/bi";
const NavSm = () => {
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">  It All Starts Here! </h3>
                <span className="text-gray-400 text-xs flex items-center">Kochi <BiChevronRight/></span>
            </div>
            <div className="w-7 h-8" >
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
        </>
    );
};
const NavMd = () => {
    return( 
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md"> 
        <BiSearch/>
            <input type="search" 
            className="w-full bg-transparent border-none focus:outline-none " 
            placeholder="Search for Movies,Events,Plays,Sports and Activites"/>
        </div>
    );
};
const NavLg = () => {
    return(
        <>
        <div className="container mx-auto p-0 items-center flex justify-between ">
<div className="flex items-center w-1/2 gap-3"> {/* logo and search*/}
<div className="w-24 h-16 ">
<img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo"
className="w-full h-full"/>
</div>
<div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md"> 
        <BiSearch/>
            <input type="search" 
            className="w-full bg-transparent border-none focus:outline-none " 
            placeholder="Search for Movies,Events,Plays,Sports and Activites"/>
        </div>
</div>
<div className="flex items-center gap-3 cursor-pointer ">  {/* place,sign in ,dropdown */}
<span className="text-gray-200 text-sm flex items-center hover:text-white ">Kochi <BiChevronDown/></span>
<button className="bg-signin-400 text-white text-sm px-3  py-1 rounded text-center block">Sign in </button>
<div className="w-8 h-8 text-white">
<BiMenu className="w-full h-full"/>
</div>

</div>
        </div>
        </>
    );
};

const Navbar = () => { 
    return(
        <>
        <nav className="bg-bms-700 p-4">
            <div className="md:hidden">{/*mobile screen -- it will be hidden from md onwards */}
            <NavSm/></div>
            <div className="hidden md:flex lg:hidden"> {/*for medium devices */}
            <NavMd/></div>
            <div className="hidden lg:flex">{/*for large  devices */}
            <NavLg/></div>
        </nav>
        
        </>
    );
};
export default Navbar; //only exporting navbar for pc,mobile,medium device