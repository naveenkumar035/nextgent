import React from "react";

function Card(){
    return(
       <>
                  <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen " >
                  <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink w-full snap-center bg-gray-800 p-3  " >
        <article >
          <h4 className="font-bold" >
          Tennis
          </h4>
          <p className=" text-base text-white" >
          Our tennis academy is designed to cater to players of all levels, from beginners to elite athletes. Under the guidance of our ATP-certified coach, we are committed to helping you achieve your full potential on the court. Whether you’re picking up a racket for the first time or aiming to compete at the highest levels, NexGen Athlete is the perfect place for you to develop your skills and passion for tennis.
          </p>
        </article>
        </div>
       
                  </div>
       
       
          </>
    )
}

export default Card;