import React from "react";

function Contact(){
    return(
        <div className=" flex flex-col h-screen bg-white " >   
    <div className="p-3" >
    <h1 className="  text-black justify-center items-center text-center" >
      Provide your Information
    </h1>
    </div>
    <div className="p-3" >
    <form>
        <div className="p-2" >
        <input
           className="mt-1 block w-1/4 p-2 border border-gray-300 rounded-md text-black "
           placeholder="Name"
        />
        </div>
        <div className="p-2" >
            <input 
             className="mt-1 block w-1/4 p-2 border border-gray-300 rounded-md text-black "
             placeholder="Email"
             />
        </div>
        <div className="p-2" >
            <input 
             className="mt-1 block w-1/4 p-2 border border-gray-300 rounded-md text-black "
             placeholder="Phone"
             />
        </div>
        <div className="p-2" >
            <input 
             className="mt-1 block w-1/2  p-20 border border-gray-300 rounded-md text-black "
             placeholder="Message"
             />
        </div>
      <div className="p-2" >
      <button className="bg-[#333536] p-2 " >
         Submit
      </button>
      </div>
    </form>
    </div>
    
  </div>
    );
}

export default Contact;