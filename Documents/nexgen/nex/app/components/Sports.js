"use client";

import React from "react";
import {motion} from "framer-motion";

import Image from "next/image";


function Sports(){
    return(
     <motion.div
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration : 1.5}}
      className=" h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center  " >
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500  text-2xl " > 
        Sports
        </h3>
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-madatory " >
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3 " >
       
         
          <Image src="/images/racquet.png" alt="Description of the image" width={50} height={50}  />
          <div >
          <h4>
          Racquet Sports
          </h4>
          <ul className="list-disc space-y-4 ml-5 text-lg " >
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
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-6 " >
         
         
          <Image src="/images/water-glasses.png" alt="Description of the image" width={50} height={50} className="rounded-full object-cover object-center " />
          <div>
          <h4>
          Aquatic Sports
          </h4>
          <ul  className="list-disc space-y-4 ml-5 text-lg "  >
            <li>
            Swimming
            </li>
            <li>
            Water Polo
            </li>
            <li>
            Diving
            </li>
            <li>
            Synchronized Swimming
            </li>
            <li>
            Aqua Aerobics
            </li>
          </ul>
         </div>
         
        </article>
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-6 " >
      
         
          <Image src="/images/teamwork.png" alt="Description of the image" width={50} height={50}  />
          <div>
          <h4>
          Team Sports
          </h4>
          <ul  className="list-disc space-y-4 ml-5 text-lg " >
            <li>
            Basketball
            </li>
            <li>
            Volleyball
            </li>
            <li>
            Football
            </li>
            <li>
            Cricket
            </li>
          </ul>
         </div>
         
        </article>
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-6 " >
        
         
          <Image src="/images/tickets.png" alt="Description of the image" width={50} height={50}  />
          <div>
          <h4>
          Individual Sports
          </h4>
          <ul  className="list-disc space-y-4 ml-5 text-lg " >
            <li>
            Gymnastics
            </li>
            <li>
            Track and Field (Athletics)
            </li>
            <li>
            Martial Arts (Karate, Taekwondo, Judo)
            </li>
            <li>
            Boxing
            </li>
            <li>
            Fencing
            </li>
            <li>
            Archery
            </li>
          </ul>
         </div>
         
        </article>
        </div>
     </motion.div>
    )
}

export default Sports;