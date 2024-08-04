"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Her(){
    const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return(
      <>
        <div className="flex space-x-6" >
        <div className="h-screen flex flex-col p-20 overflow-hidden sm:block hidden " > 
        <Image src="/images/free.png" alt="Description of the image" width={450} height={450} />
        </div>
        
        <div className="slider-container mt-20  p-20 flex flex-col sm:block hidden ">
        <Slider {...sliderSettings}>
          <div>
           <h1 className=" text-5xl text-red-600  font-bold " >
            Vision
           </h1>
           <div className="text-black p-2 " >
           Empowering Every Student-Athlete to Become a International Champion
           </div>
          </div>
          <div>
           <h1 className="text-5xl text-red-600 font-bold " >
            Mission
           </h1>
           <p className="text-black" >
           Cultivating Global Champions with Knowledge and Character
           </p>
          </div>
          <div>
            <h1 className="text-5xl text-red-600 font-bold " >
            Our Commitment
            </h1>
            <p className="text-black" >
            Transforming India into a sports powerhouse by developing talented athletes and inspiring champions for tomorrow.
            </p>
          </div>
        </Slider>
      </div>
       <div>
      

       </div>
    
        </div>
        </>
    )
}

export default Her;