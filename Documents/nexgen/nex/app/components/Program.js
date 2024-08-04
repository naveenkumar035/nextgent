"use client"

import react from "react";
import Image from "next/image";

function Program(){
    return(
      
         <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-red-600  text-2xl " > 
        Programs
        </h3>
        <div className="  flex flex-col space-y-5 items-center justify-center p-5 h-screen " >
            <Image src="/images/medal.png" alt="Description of the image" width={100} height={100} />
            <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10 " >
               Beginner
            </h4>
            <p className="text-base text-black " >
            newcomers to learn basic skills and rules in a fun, supportive environment.
            </p>
            </div>
            <div className=" flex flex-col space-y-5 items-center justify-center p-5 h-screen " >
            <Image src="/images/medal-2.png" alt="Description of the image" width={100} height={100} />
            <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10 " >
               Intermediate
            </h4>
            <p className="text-base text-black " >
            athletes to develop advanced techniques and strategic understanding.
            </p>
            </div>
            <div className="flex flex-col space-y-5 items-center justify-center p-5 h-screen " >
            <Image src="/images/reward.png" alt="Description of the image" width={100} height={100} />
            <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10 " >
               Advanced
            </h4>
            <p className="text-base text-black " >
            Intensive training for athletes aiming to refine skills and compete at higher levels.
            </p>
            </div>
            <div className=" flex flex-col space-y-5 items-center justify-center p-5  h-screen " >
            <Image src="/images/shield.png" alt="Description of the image" width={100} height={100} />
            <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10 " >
               Elite
            </h4>
            <p  className="text-base text-black " >
            Specialized programs for top-tier athletes to perfect skills and compete at the highest levels.
            </p>
            </div>
      </div>
    )
}

export default Program;