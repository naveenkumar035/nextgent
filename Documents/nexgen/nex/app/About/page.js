import React from "react";

function About(){
    return(
        <>    
           <div className="flex flex-col h-screen bg-white snap-y snap-mandatory overflow-scroll z-0">   
           <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"> 
            NextGen Athlete
        </h3>
       
       <div className="mt-60 p-5">
           <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10">
              Journey
           </h4>

           <p className="text-base text-black p-4">
               History of Prestige Group of Tennis Schools<br />
               Founded: 2017<br />
               Location: Chennai, India
           </p>
           <p className="text-base text-black p-4">
               The Prestige Group of Tennis Schools was established in 2017 with the vision of nurturing tennis talent and promoting the sport among young enthusiasts in Chennai. From the very beginning, our mission has been to provide world-class tennis coaching and facilities, ensuring that our students receive the best possible training to excel in the sport.
           </p>

           <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10">
              Growth and Achievements
           </h4>

           <p className="text-base text-black p-4">
               Over the years, Prestige Group of Tennis Schools has grown from a single school to three state-of-the-art tennis academies in Chennai. Our commitment to excellence and passion for tennis has driven us to create a nurturing environment where players can develop their skills and achieve their full potential.
           </p>

           <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10">
              Training by ATP Certified Professionals
           </h4>

           <p className="text-base text-black p-4">
               One of the key factors behind our success is our team of ATP certified professional tennis players. Our coaches bring their international experience and expertise to the court, offering personalized and advanced training programs. Their guidance has been instrumental in shaping the careers of many young tennis players.
           </p>

           <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10">
              Producing Champions
           </h4>

           <p className="text-base text-black p-4">
               Our schools have produced numerous national and state-level tennis players who have gone on to achieve great success in various tournaments. The rigorous training programs, combined with our coaches&apos; dedication, have helped our players excel and stand out in the competitive tennis arena.
           </p>
           <p className="text-base text-black p-4">
               National Level Players: Several of our students have represented Tamil Nadu and other states at the national level, showcasing their talent and bringing accolades to our schools.<br />
               State Level Players: Our players consistently perform at the highest level in state competitions, making a mark with their skill and determination.
           </p>
           <h4 className="text-4xl text-gray-600 font-semibold space-y-10 px-0 md:px-10">
              Our Vision for the Future
           </h4>
           <p className="text-base text-black p-4">
               As we look to the future, we aim to expand our reach and continue our tradition of excellence in tennis coaching. We are committed to discovering and nurturing the next generation of tennis champions, providing them with the resources and training they need to succeed on both national and international stages.
           </p>
       </div>
       </div>

           </div>
       </>
    )
}

export default About;
