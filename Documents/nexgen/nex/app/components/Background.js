"use client";

import React from "react";
import motion from "framer-motion";

function Background(){
    return(
        <div className="relative flex justify-center items-center " >
        <div className=" absolute border border-red-300 rounded-full h-[100px] w-[100px] mt-52  animate-ping  " />
       
       <div className="absolute border border-red-300 rounded-full h-[300px] w-[300px] mt-52 animate-pulse opacity-20  " />
      
       </div>
       
    );
}

export default Background;