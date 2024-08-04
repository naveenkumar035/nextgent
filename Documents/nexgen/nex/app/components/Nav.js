"use client";

import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import React from "react";
import {Link} from "@nextui-org/link"
import { useState } from "react";
import Whatsapp from "./Whatspp";
import { MdMessage } from 'react-icons/md';
import { Modal, message } from "antd";
import Image from "next/image";
import { 
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import {  db, storage } from  '../../firebase'; 



function Nav(){
  const[show, setShow] = useState(false);
  const[nam , setNam] = useState('');
  const[email , setEmail] = useState('');
  const [ number , setNumber ] = useState('');
  const [ message , setMessage  ] = useState('');
  const [ loading , setLoading] = useState(false);
 
  const [ open,setOpen ] = useState(false);
  const [confirmLoading, setConfirmLoading] =  useState(false);


  const handlemenu = () => {
    setShow(!show);
  }

  const modelen = (e) => {
    setOpen(!open);
 }

 const handleCancel = () => {
  console.log('Clicked cancel button');
  setOpen(false);
};
const sendForm = async () => {
  if(loading) return;
  setLoading(true);
  setOpen(!open);
  const docRef = await addDoc(collection(db,'forms'), {
 // id: session.user.uid,
 // username: session.user.name,
  //userImg: session.user.image,
 // tag: session.user.tag,
  email: email,
  message: message,
  phone: number,
  name : nam,
  timestamp: serverTimestamp(),       
  });    }
    return(
      <>
    <div className="bg-[#333536] p-3 " >      
     <div className="flex justify-between items-center max-w-screen-xl mx-auto">
      <div className="flex items-center space-x-3 border-r border-white pr-3">
      <div className="p-2" >
        <Image src="/images/whitelogo.png" alt="Description of the image" width={30} height={30}/>
        </div>
        <Link href="/">
       <h1 className=" lg:hidden text-white font-bold p-3 " >
        NexGen <span className="text-red-600 font-bold " > Athlete </span>
      </h1>
      </Link>
      <Link
           href="About"
           >
           <ArrowCircleRightIcon  className="h-5 text-white  lg:hidden "/>
           </Link>
      </div>
      <div className=" flex items-center  space-x-3 lg:hidden " >
        <div className="h-6 w-6 text-white">
        <MdMessage onClick={modelen} />
        </div> 
      
      </div>
     
      <Link href="/">
      <div className=" text-white hidden sm:block xl:inline" >
        Home
      </div>
      </Link>
      <Link href="About">
      <div className=" text-white hidden sm:block xl:inline" >
        About us
      </div>
      </Link>
      <div>
        <Whatsapp  />
        </div>
        <div className=" text-white hidden sm:block xl:inline" onClick={modelen} >
        Contact
       </div>
       <Modal
        centered
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        open={open}
        footer={[
                    <button 
                           className="bg-black text-white rounded-full px-4
                          py-1.5 font-bold shadow-md hover:bg-black 
                          disabled:hover:bg-grey disabled:opacity-50
                          disabled:cursor-default"
                          key="submit" 
                         onClick={sendForm}
                        >
                            Submit
                        </button>
        ]}
      >
         <h1 className="  text-black justify-center items-center text-center" >
      Provide your Information
    </h1>
    <div className="p-3" >
    <form>
        <div className="p-2" >
        <input
        value={nam}
        onChange={(e) => setNam(e.target.value) }
           className="mt-1 block w-1/4 p-2 border border-gray-300 rounded-md text-black "
           placeholder="Name"
        />
        </div>
        <div className="p-2" >
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value) }
             className="mt-1 block w-1/4 p-2 border border-gray-300 rounded-md text-black "
             placeholder="Email"
             />
        </div>
        <div className="p-2" >
            <input 
            value={number}
            onChange={(e)=> setNumber(e.target.value) }
             className="mt-1 block w-1/4 p-2 border border-gray-300 rounded-md text-black "
             placeholder="Phone"
             />
        </div>
        <div className="p-1" >
            <input 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
             className="mt-1 block w-1/2  p-10 border border-gray-300 rounded-md text-black "
             placeholder="Message"
             />
        </div>
    
    </form>
    </div>
       
       
        
      </Modal>

      </div>
    </div>
   
    </>
    )
}

export default Nav;