"use client";

import React from "react";
import Image from "next/image";

function Programs(){
    const programs = [1,2,3,4,5];
    return(
      <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500  text-2xl " > 
        Programs
        </h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 " >
         {programs.map((program)=>(
            <div
            key={program}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen " >
              <Image src="/images/colorful-design-with-spiral-design_188544-9588.avif " alt="Description of the image" width={350} height={350} />
              </div>
         )
           
         )}
        </div>
      
      </div>
    )
}

export default Programs;