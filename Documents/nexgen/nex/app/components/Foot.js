import React from "react";
import  { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Foot(){
    return(
       <>
       <div className="bg-grey-100 h-1/2 w-full justify-around items-start flex md:flex-row flex-col justify-between items-center max-w-screen-xl mx-auto p-20 " >
      
         <div className="p-5" >
            <ul>
                <p className="text-white-800 font-bold text-3xl pb-6 " >
                      Next <span className="text-red-600" > Gen </span>
                </p>
                <div className="flex gap-6 pb-5" >
                 <FaInstagram className="text-2xl cursor-pointer hover:text-red-600 "/>
                 <FaLinkedin  className="text-2xl cursor-pointer hover:text-red-600 "/>
                 <FaTwitter  className="text-2xl cursor-pointer hover:text-red-600 "/>
                 <FaYoutube className="text-2xl cursor-pointer hover:text-red-600 "/>
                 <FaFacebook className="text-2xl cursor-pointer hover:text-red-600 "/>
                </div>
            </ul>
         </div>
         <div className="border-l border-red-600 " >
          <h1 className="p-2" >
            Address
          </h1>
          <p className="text-white p-2 " >
          1879, 18th Main Road, <br/>
           Anna Nagar, Chennai 600 040 <br/>
          </p>
         </div>
       </div>
       <div className="flex flex-col justify-center items-center text-center p-5 bg-[#333536]" >
         <h1 className=" text-red-800 font-semibold " >
        Copyright © 2024 All rights reserved 
         </h1>
       </div>
       </>
    )
}

export default Foot;