"use client";

import React from "react";
import Image from "next/image";

function Programs(){
  
    return(
      <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500  text-2xl " > 
        Programs
        </h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-10  " >
        
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen " >
            <Image src="/images/medal.png " alt="Description of the image" width={200} height={200} />
            <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10 " >
               Beginner
            </h4>
            <p className="text-base text-black " >
             Basic strokes, rules of the game, footwork , basic shots, grip techniques , court movement, understanding rules , serve and return , water safety , building confidence , water synchronization,  routines ,introduction to strength and cardio and flexibility 
            </p>
            </div>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen " >
            <Image src="/images/medal-2.png " alt="Description of the image" width={200} height={200} />
            <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10 " >
               Intermediate
            </h4>
            <p className="text-base text-black " >
            Advanced techniques, match strategies, physical conditioning , endurance training ,technique refinement , longer intervals, increased intensity and personalized training

            </p>
            </div>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen " >
            <Image src="/images/reward.png " alt="Description of the image" width={200} height={200} />
            <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10 " >
               Advanced
            </h4>
            <p className="text-base text-black " >
            Competitive play, mental toughness, tournament preparation ,strategy development, strength conditioning ,cardiovascular fitness ,High-intensity workouts ,event specialization
            </p>
            </div>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen " >
            <Image src="/images/shield.png " alt="Description of the image" width={200} height={200} />
            <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10 " >
               Elite
            </h4>
            <p  className="text-base text-black " >
            High-performance training, national and international competition readiness , custom high-performance routines, specialized training for athletes

            </p>
            </div>
        
       </div>
       
      
      </div>
    )
}

export default Programs;