"use client";

import React from "react";
import Image from "next/image";

function About(){
    return(
       <div className=" h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center " >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500  text-2xl " > 
        About
        </h3>
        <div  >
        <Image src="/images/prestige.png" alt="Description of the image" width={550} height={550} />
        </div>
    
        <div>
            <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10 p-5 " >
               Prestige Group
            </h4>
            <p className="text-base text-black p-2 " >
            
           Nextgen Athelete is the parent company of the Prestige Group of Tennis  which was established in 2017 with the vision of nurturing tennis talent and promoting the sport among young enthusiasts in Chennai. From the very beginning, our mission has been to provide world-class tennis coaching and facilities, ensuring that our students receive the best possible training to excel in the sport.

            </p>
        </div>
       </div>
    )
}

export default About;