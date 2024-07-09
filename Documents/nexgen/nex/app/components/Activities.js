"use client";

import React from "react";
import Image from "next/image";

function Activities(){
    return(
        <div className= " flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center " >
       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500  text-2xl " > 
        Activities
        </h3>
        <div className="grid grid-cols-4 gap-5 " >
          <div  >
          <Image src="/images/yoga-2.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  " />
          </div>
          <div  >
          <Image src="/images/jackknife.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  " />
          </div>
          <div  >
          <Image src="/images/zumba.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn " />
          </div>
          <div  >
          <Image src="/images/pilates.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn " />
          </div>
          <div  >
          <Image src="/images/hiit.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn " />
          </div>
          <div  >
          <Image src="/images/military-camp.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn " />
          </div>
          <div  >
          <Image src="/images/leadership.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  " />
          </div>
          <div  >
          <Image src="/images/strenght.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn " />
          </div>
          <div  >
          <Image src="/images/endurance.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn " />
          </div>
         
          
        </div>
        </div>
    )
}
export default Activities;