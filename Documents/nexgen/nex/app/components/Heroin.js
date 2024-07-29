"use client";

import react from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./Hero";

function Heroin(){
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
        <Slider {...sliderSettings} className="  items-center justify-center text-center" >
            <div  >
                <Hero/>
            </div>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen " >
           <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10">
             Mission
           </h4>

           <p className="text-base text-black p-4">
           Our mission is to nurture student-athletes who are not only champions in their sports but also learned individuals with strong character. We aim to provide a balanced and comprehensive approach to development that encompasses academic rigor, athletic excellence, and personal growth. By focusing on the cultivation of knowledge and character, we prepare our student-athletes to excel in all areas of life, both on and off the field.
           </p>
          

            </div>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen " >
           <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10">
             Vision
           </h4>

           <p className="text-base text-black p-4">
           Our vision encapsulates the essence of our commitment to the holistic development of student-athletes. We aspire to see every student-athlete achieve championship status, not only in their respective sports but also in their personal and academic endeavors. This vision reflects our dedication to fostering an environment where excellence is the standard, and every individual is empowered to reach their highest potential.
           </p>
            </div>
        </Slider>
    )
}

export default Heroin;