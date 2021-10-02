//to make custom arrow key
import React from "react";

 export const NextArrow =(props)=>{
return(         //props comprises of className ,style,onclick
    <>
    <div 
    className={props.className}
    style={{...props.style, backgroundColor:"black"}}
    onClick={props.onClick}
    />
    </>
);
};

export const PrevArrow =(props)=>{
    return(
        <>
          <div 
            className={props.className}
            style={{...props.style, backgroundColor:"black"}}
            onClick={props.onClick}
            />
        </>
    );
    };

    //no need to write export default..instead do export const