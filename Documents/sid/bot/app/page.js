import Image from "next/image";
import Button from "./components/button";
import {Link} from "@nextui-org/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by clicking features
          
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <p className="font-bold" >
            VJA Associates
            </p>
            
          </a>
        </div>
      </div>

     

      <div className="mb-32 grid text-center  ">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
           <Button/>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 p-3 `}>
            Click above for download statements
          </p>
        </div>
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link href="/stocky">
           <button className="bg-white text-black rounded p-3">
             Stocky
          </button>
          </Link>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 p-3 `}>
            Click above for download stock prices
          </p>
        </div>
    
      
       

       
      </div>
    </main>
  );
}
