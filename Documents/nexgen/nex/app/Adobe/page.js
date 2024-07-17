"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";


function Adobe(){
    const [activeIcon, setActiveIcon] = useState(0);

    const handleMouseEnter = (icon) => {
      setActiveIcon(icon);
    };
  
    const handleMouseLeave = () => {
      setActiveIcon(null);
    };
  
    const getCardClassName = (icon) => {
      return activeIcon === icon
        ? "hoverAnimation"
        : "absolute top-24 left-0 flex flex-col rounded-lg items-center space-y-7 flex-shrink w-[500px] md:w-[600px] xl:w-[900px] bg-[#333536] p-3 z-10" ;
    };
    return(
        <>
    
        <div className=" group relative" >
        <article className={getCardClassName("yoga")}>
        <Image src="/images/racquet.png" alt="Description of the image" width={50} height={50}  />
        <div >
        <h4 className="font-bold" >
        Racquet Sports
        </h4>
        <ul className="list-disc space-y-4 ml-5  " >
             <li>Tennis</li>
             <li>
             Badminton
             </li>
             <li>
             Squash

             </li>
             <li>
             Table Tennis (Ping Pong)
             </li>
             <li>
             Pickleball
             </li>
        </ul>
       </div>
       
      </article>
         <div  >
         <Image src="/images/yoga-2.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn" onMouseEnter={() => handleMouseEnter("yoga")}
          onMouseLeave={handleMouseLeave} />
         </div>
         </div>
         </>
    )
}

export default Adobe;