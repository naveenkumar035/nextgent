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
        <div className="flex space-x-6" >
        <div className="h-screen flex flex-col p-20 overflow-hidden sm:block hidden " > 
        <Image src="/images/free.png" alt="Description of the image" width={450} height={450} />
        </div>
        <div className="slider-container mt-20  p-20 flex flex-col sm:block hidden ">
        <Slider {...sliderSettings}>
          <div>
           <h1 className="text-black font-bold " >
            Vision
           </h1>
           <p className="text-black" >
           Our vision encapsulates the essence of our commitment to the holistic development of student-athletes. We aspire to see every student-athlete achieve championship status, not only in their respective sports but also in their personal and academic endeavors. This vision reflects our dedication to fostering an environment where excellence is the standard, and every individual is empowered to reach their highest potential.
           </p>
          </div>
          <div>
           <h1 className="text-black font-bold " >
            Mission
           </h1>
           <p className="text-black" >
           Our mission is to nurture student-athletes who are not only champions in their sports but also learned individuals with strong character. We aim to provide a balanced and comprehensive approach to development that encompasses academic rigor, athletic excellence, and personal growth. By focusing on the cultivation of knowledge and character, we prepare our student-athletes to excel in all areas of life, both on and off the field.
           </p>
          </div>
          <div>
            <h1 className="text-black font-bold " >
             Our Values
            </h1>
            <p className="text-black" >
            * Respect<br/>
            * Integrity <br/>
            * Responsibility • Excellence <br/>
            * Resilience
            </p>
          </div>
        </Slider>
      </div>
       <div>
      

       </div>
    
        </div>
    )
}

export default Her;