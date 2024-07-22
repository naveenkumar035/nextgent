"use client";

import React from "react";
import {motion} from "framer-motion";
import { useRef , useEffect } from "react";
import Image from "next/image";
import { useState } from "react";


function Sports(){
    const [activeIcon, setActiveIcon] = useState(null);
    const imageContainerRef = useRef(null);
    const cardContainerRef = useRef(null);

    const handleMouseEnter = (icon) => {
      setActiveIcon(icon);
    };
  
    const handleMouseLeave = () => {
      setActiveIcon(null);
    };


    const getCardClassName = (icon) => {
        return activeIcon === icon
          ? 
           "navcard"
          : ""
    
      };

      useEffect(() => {
        const imageContainer = imageContainerRef.current;
        const cardContainer = cardContainerRef.current;
    
        const handleScroll = () => {
          const scrollRatio = imageContainer.scrollLeft / (imageContainer.scrollWidth - imageContainer.clientWidth);
          const targetScrollLeft = scrollRatio * (cardContainer.scrollWidth - cardContainer.clientWidth);
          cardContainer.scrollLeft = targetScrollLeft;
        };
    
        imageContainer.addEventListener("scroll", handleScroll);
    
        return () => {
          imageContainer.removeEventListener("scroll", handleScroll);
        };
      }, []);
  
    return(
        <>
     <motion.div
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration : 1.5}}
      className=" h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center  " >
         <h3 className="absolute  top-24 uppercase tracking-[20px] text-gray-500  text-2xl " > 
        Sports
        </h3>
        <div className="flex flex-col items-center space-y-5 mt-36 w-full">
        <div className="w-full md:w-1/4 flex space-x-5 items-center justify-center justify-between overflow-x-scroll p-10 overflow-hidden " 
                    ref={imageContainerRef}

        >
        <Image src="/images/tennis-balls.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn" onMouseEnter={() => handleMouseEnter("yoga")}
          onMouseLeave={handleMouseLeave}  />
        <Image src="/images/racket-2.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  " onMouseEnter={() => handleMouseEnter("rac")}  onMouseLeave={handleMouseLeave}  />
        <Image src="/images/arrow.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  " />
        <Image src="/images/ping-pong.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  " />
        <Image src="/images/racket-3.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  " />
        <Image src="/images/basketball.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  "  />
        <Image src="/images/boxing-gloves.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  "  />
        <Image src="/images/cricket.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  "  />
        <Image src="/images/swimming.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  "  />
        <Image src="/images/endurance.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  "  />
        <Image src="/images/strenght.png" alt="Description of the image" width={50} height={50} className=" hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn  "  />
        </div>
      
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-madatory mt-20 "
             ref={cardContainerRef}
           >
      <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3  " >
        <article className={getCardClassName("yoga")} >
          <h4 className="font-bold" >
          Racquet 
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
        </article>
        </div>
        

        
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3 navcard " >
          <div  >
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
        <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3 " >
          <article className={getCardClassName("rac")}  >
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
          </article>
         </div>
         
       
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3 " >
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
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3 " >
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
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3 " >
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
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3 " >
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
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3 " >
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
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3 " >
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
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3 " >
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
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-500px md:w-[600px] xl:w-[900px] snap-center bg-[#333536] p-3 " >
          <div >
          <h4 className="font-bold" >
          Rac
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
        
        </div>
        </div>

       
       
        <style jsx>{`
        .overflow-hidden::-webkit-scrollbar {
          display: none;
        }
        .overflow-hidden {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>

     </motion.div>
     </>
    )
}

export default Sports;