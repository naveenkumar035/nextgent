"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

function PauseOnHover() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
          <Image src="/images/yoga-2.png" alt="Description of the image" width={50} height={50} />
          </div>
          <div>
          <Image src="/images/yoga-2.png" alt="Description of the image" width={50} height={50} />
          </div>
          <div>
          <Image src="/images/yoga-2.png" alt="Description of the image" width={50} height={50} />
          </div>
      
        </Slider>
      </div>
    );
  }
  
  export default PauseOnHover;