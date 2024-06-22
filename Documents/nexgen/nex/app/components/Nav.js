"use client";

import React from "react";
import { MenuIcon } from '@heroicons/react/outline';
import {Link} from "@nextui-org/link"
import { useState } from "react";

function Nav(){
  const[show, setShow] = useState(false);

  const handlemenu = () => {
    setShow(!show);
  }

    return(
      <>
    <div className="bg-[#333536] p-3 " >      
     <div className="flex justify-between items-center max-w-screen-xl mx-auto">
      <div className="flex items-center space-x-3 border-r border-white pr-3">
      <h1 className="  text-white  p-3 " >
        NextGen Athlete
      </h1>
      </div>
      <div className=" flex items-center  space-x-3 lg:hidden " >
        <div className="h-6 w-6 text-white">
        <MenuIcon onClick={handlemenu} />
        </div>
        {show ?  
    <div className=" " >
    <div className="menucard" >
      <div className="flex flex-col items-center h-screen"  >
      <div className="p-3" > category 1 </div> 
      <div className="p-3"  >category 2</div>
      <div className="p-3"  >
        category 3
      </div>
      <div className="p-3"  >
        category 4
      </div>
      <div className="p-3"  >
        category 5
      </div>
      
      </div>
    </div> </div>: null
       }
      </div>
      <Link href="cat1">
      <div className="hidden sm:block xl:inline" >
        category 1
      </div>
      </Link>
      <Link href="cat2">
      <div className="hidden sm:block xl:inline" >
        category 2
      </div>
      </Link>
      <Link href="cat3">
      <div className="hidden sm:block xl:inline" >
        category 3
      </div>
      </Link>
      <Link href="cat4">
      <div className="hidden sm:block xl:inline" >
        category 4
      </div>
      </Link>
      <Link href="cat5">
      <div className="hidden sm:block xl:inline" >
        category 5
      </div>
      </Link>
      <Link href="book">
      <div>
        <button className="bg-white text-black p-3 " >
          Book
        </button>
      </div>
      </Link>
      </div>
    </div>
   
    </>
    )
}

export default Nav;