"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardHeader } from "@nextui-org/card";

const imageCardData = [
  {
    src: "/images/tennis-balls.png",
    alt: "Tennis Balls",
    cardContent: {
      text: "Our tennis academy is designed to cater to players of all levels, from beginners to elite athletes. Under the guidance of our ATP-certified coach, we are committed to helping you achieve your full potential on the court. Whether you’re picking up a racket for the first time or aiming to compete at the highest levels, NexGen Athlete is the perfect place for you to develop your skills and passion for tennis.",
      title: "Tennis",
      cardImage: "/images/trennis.jpg",
    },
  },
  {
    src: "/images/racket-2.png",
    alt: "Tennis Balls",
    cardContent: {
      text: "Our badminton academy welcomes players of all skill levels, from novices to top-tier athletes. Under the leadership of our internationally certified coach, we strive to unlock your fullest potential on the court. Whether you're just starting with a shuttlecock or aspiring to reach the pinnacle of the sport, NexGen Athlete provides the perfect environment for you to enhance your skills and love for badminton.",
      title: "Badminton",
      cardImage: "/images/bradminton.jpg",
    },
  },
  {
    src: "/images/arrow.png",
    alt: "Tennis Balls",
    cardContent: {
      text:"Our squash academy is dedicated to serving players of all abilities, from beginners to elite competitors. With the guidance of our world-class coach, we are committed to helping you reach your highest potential on the court. Whether you're picking up a squash racket for the first time or striving to compete at the top levels, NexGen Athlete is the ideal place to cultivate your skills and passion for squash.",
      title: "Squash",
      cardImage: "/images/sqraush.jpg",
    },
  },
  {
    src: "/images/ping-pong.png",
    alt: "Tennis Balls",
    cardContent: {
      text: "Our table tennis academy caters to players of all skill levels, from beginners to elite athletes. Under the expert guidance of our certified coach, we are dedicated to helping you achieve your full potential at the table. Whether you're holding a paddle for the first time or aiming to compete at the highest levels, NexGen Athlete offers the perfect environment to develop your skills and passion for table tennis.",
      title: "Table Tennis",
      cardImage: "/images/trable-tennis.jpg",
    },
  },
  {
    src: "/images/racket-3.png",
    alt: "Tennis Balls",
    cardContent: {
      text: "Our pickleball academy is designed to accommodate players of all levels, from beginners to advanced athletes. Guided by our experienced and certified coach, we are committed to helping you reach your maximum potential on the court. Whether you're new to the game or striving to compete at the highest levels, NexGen Athlete is the ideal place to develop your skills and passion for pickleball.",
      title: "Pickle ball",
      cardImage: "/images/priickle.jpg",
    },
  },
  {
    src: "/images/basketball.png",
    alt: "Tennis Balls",
    cardContent: {
      text: "Our basketball academy is dedicated to players of all skill levels, from beginners to elite athletes. Under the guidance of our professional coaches, we are committed to helping you achieve your full potential on the court. Whether you're dribbling for the first time or aiming to compete at the highest levels, NexGen Athlete provides the perfect environment to develop your skills and passion for basketball.",
      title: "Basketball",
      cardImage: "/images/brasketball.jpg",
    },
  },
  {
    src: "/images/boxing-gloves.png",
    alt: "Tennis Balls",
    cardContent: {
      text: "Our boxing academy is designed to cater to fighters of all levels, from novices to elite athletes. Under the expert guidance of our professional coaches, we are committed to helping you achieve your full potential in the ring. Whether you're throwing your first punch or aiming to compete at the highest levels, NexGen Athlete offers the perfect environment to develop your skills and passion for boxing.",
      title: "Boxing",
      cardImage: "/images/brooxing.jpg",
    },
  },
  {
    src: "/images/cricket.png",
    alt: "Tennis Balls",
    cardContent: {
      text: "Our cricket academy is dedicated to players of all levels, from beginners to elite athletes. With the expertise of our professional coaches, we are committed to helping you achieve your full potential on the field. Whether you're picking up a bat for the first time or aiming to compete at the highest levels, NexGen Athlete provides the perfect environment to develop your skills and passion for cricket.",
      title: "Cricket",
      cardImage: "/images/crricket.jpg",
    },
  },
  {
    src: "/images/swimming.png",
    alt: "Tennis Balls",
    cardContent: {
      text: "Our swimming academy welcomes swimmers of all levels, from beginners to elite athletes. Under the guidance of our certified coaches, we are committed to helping you achieve your full potential in the water. Whether you're learning to swim for the first time or aiming to compete at the highest levels, NexGen Athlete offers the perfect environment to develop your skills and passion for swimming.",
      title: "Swimming",
      cardImage: "/images/swriimming.jpg",
    },
  },
  {
    src: "/images/endurance.png",
    alt: "Tennis Balls",
    cardContent: {
      text: "Our personal training program is designed to support individuals of all fitness levels, from beginners to elite athletes. With the expertise of our certified trainers, we are committed to helping you achieve your full potential. Whether you're starting your fitness journey or striving to reach peak performance, NexGen Athlete provides the perfect environment to develop your skills and passion for personal fitness.",
      title: "Personal training",
      cardImage: "/images/pressonal.jpg",
    },
  },
  {
    src: "/images/strenght.png",
    alt: "Tennis Balls",
    cardContent: {
      text: "Our CrossFit program is tailored for athletes of all levels, from beginners to seasoned competitors. Guided by our experienced trainers, we are committed to helping you achieve your highest potential through functional and high-intensity workouts. Whether you're new to CrossFit or aiming to compete at advanced levels, NexGen Athlete provides the ideal environment to push your limits and enhance your strength and conditioning.",
      title: "Crossfit",
      cardImage: "/images/crrossfit.jpg",
    },
  },
]

function Sports() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef(null);
  const cardContainerRef = useRef(null);

  const handleMouseEnter = (icon) => {
    setActiveIcon(icon);
  };

  const handleMouseLeave = () => {
    setActiveIcon(null);
  };

  const getCardClassName = (icon) => {
    return activeIcon === icon ? "navcard" : "";
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

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-20 p-20 ">
          Sports
        </h3>
        <div className="flex flex-col items-center space-y-5  w-full">
          <div
            className="w-full flex space-x-5 items-center justify-center snap-center justify-between overflow-x-scroll p-10 overflow-hidden"
            ref={imageContainerRef}
          >
            {imageCardData.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={50}
                height={50}
                className="hoverAnimation rounded-full border border-black-500 object-cover h-20 w-20 xl:w-20 xl:h-20 navbtn"
                onMouseEnter={() => handleMouseEnter(image.alt)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(index)}
              />
            ))}
           
          </div>
          <p className="text-gray-300 sm:block hidden" >
            Click above
          </p>


          <div className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20 mt-10 overflow-hidden " ref={cardContainerRef}>
          {imageCardData.map((image, index) => (
              <div key={index} className={`w-screen flex-shrink-0  flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ${currentIndex === index ? "block" : "hidden"}`}>
                <Card className="col-span-12 sm:col-span-4 h-[500px] max-w-[1000px]">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <h4 className="text-white font-medium text-large">{image.cardContent.title}</h4>
                    <p className="text-tiny text-white overflow-y-scroll">
                      {image.cardContent.text}
                    </p>
                   
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={image.cardContent.cardImage}
                    width={200}
                    height={200}
                  />
                </Card>
              </div>
            ))}

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
  );
}

export default Sports;
