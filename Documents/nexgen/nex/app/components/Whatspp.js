"use client";

import { Tooltip } from "@nextui-org/tooltip";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";


function Whatsapp(){
    const phoneNumber = '7904815658'; // Replace with the actual phone number
    const message = encodeURIComponent('Hello, I would like to enquire about...');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    return(
        
        <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      >
             <FaWhatsapp className="text-2xl cursor-pointer hover:text-green-500 " />
             </a>
           
           
         
    
    );
}

export default Whatsapp;