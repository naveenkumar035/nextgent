"use client";

import React from "react";

function About(){
    return(
       <div className=" h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center " >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500  text-2xl " > 
        About
        </h3>
        <div>
            <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10 " >
               here
            </h4>
            <p className="text-base text-black " >
            To foster a healthy and active lifestyle by providing professional sports coaching and fitness training within the convenience of apartment communities.

            </p>
        </div>
       </div>
    )
}

export default About;