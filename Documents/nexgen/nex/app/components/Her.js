import React from "react";
import Image from "next/image";

function Her(){
    return(
        <div className="flex space-x-6" >
        <div className="h-screen flex flex-col p-20 overflow-hidden " > 
        <Image src="/images/free.png" alt="Description of the image" width={450} height={450} />
        </div>
        <div className="text-black items-center justify-center text-center p-20 " >
                  Our Vision
Every Student-Athlete A Champion

Our Mission
Nurturing Learned Champions With Character

Our Values
* Respect
* Integrity
* Responsibility • Excellence
* Resilience
        </div>
        </div>
    )
}

export default Her;