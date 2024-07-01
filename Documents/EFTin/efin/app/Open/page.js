"use client";

import React from "react";


function Open(){
 
  return(
  <>
   <div className="kick h-screen " >
     <div className="flex justify-between items-center max-w-screen-xl mx-auto">
       <h1 className="text-white font-bold p-10  " >
        Eftin
       </h1>
       
       <h1 className="text-white hidden sm:block " >
        Why Eftin ?
       </h1>
       <h1 className="text-white hidden sm:block " >
        Support
       </h1>
       
       <div className="p-3" >
       <button className="button rounded"  >
        <p className="p-2 text-black" >
          Login
        </p>
       </button>
       </div>
       <div className="p-3" >
        <button className="button rounded"  >
        <p className="p-2 text-black" >
          Open Eftin
        </p>
        </button>
       </div> 
       </div>
     <div className="flex flex-col p-40  md:h-[83vh] md:flex relative " >
     <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center ">
      <h1 className="font-bold hidden sm:block tracking-wide p-3 " >
        Your Job to Join
      </h1>
      <h2 className=" hidden sm:block tracking-wide lg:max-w-3xl w-full  " >
      Eftin is a dynamic platform designed to bridge the gap between job seekers and recruiters. By enabling direct communication, JobConnect streamlines the hiring process, making it faster and more efficient. Job seekers can showcase their skills and experiences, while recruiters can find the perfect candidates without the hassle of intermediaries. Join Eftin today and take the next step in your career journey!
      </h2>
      </div>
     </div>
  </div>
     </>
   
  );
       }

export default Open;
