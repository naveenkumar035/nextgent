import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
    <Nav/>
    <div className=" flex h-screen bg-white " >   
      <h1 className="text-black" >
        hello
      </h1>
    </div>
   </>
  );
}
