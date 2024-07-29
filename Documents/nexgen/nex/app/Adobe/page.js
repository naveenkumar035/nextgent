"use client";

import React, { useState } from "react";
import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

function Adobe() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    console.log(`Mouse Enter: ${icon}`);
    setActiveIcon(icon);
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave");
    setActiveIcon(null);
  };

  const getCardClassName = (icon) => {
    console.log(`Active Icon: ${activeIcon}`);
    return activeIcon === icon ? "navcard" : "";
  };

  return (
    <>
        <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink  snap-center bg-[#333536] p-3  " >
        <article className={getCardClassName("yoga")} >
          <h4 className="font-bold" >
          Racquet 
          </h4>
          <p className=" text-base text-white" >
          
          </p>
        </article>
        </div>
      <div className="p-10">
        <Image
          src="/images/yoga-2.png"
          alt="Description of the image"
          width={50}
          height={50}
          className="hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn"
          onMouseEnter={() => handleMouseEnter("yoga")}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <Card className="col-span-12 sm:col-span-4 h-[300px] max-w-[200px] ">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white   overflow-y-scroll ">Our tennis academy is designed to cater to players of all levels, from beginners to elite athletes. Under the guidance of our ATP-certified coach, we are committed to helping you achieve your full potential on the court. Whether you’re picking up a racket for the first time or aiming to compete at the highest levels, NexGen Athlete is the perfect place for you to develop your skills and passion for tennis.</p>
        <h4 className="text-white font-medium text-large">Tennis</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/images/prestige.png"
        width={50} height={50} 
      />
    </Card>

    </>
  );
}

export default Adobe;
