import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Sports from "./components/Sports";


 function Home() {
  return (
    <>
    <div className=" flex flex-col h-screen bg-white snap-y snap-mandatory overflow-scroll z-0  " >   
    
      <section id="hero" className="snap-start" >
      <Hero/>
     </section>
     <section id="about" className="snap-center" >
      <About/>
     </section>
     <section id="soprts" className="snap-center"  >
      <Sports/>
     </section>
    
  </div>
  
  </>
  );
}

export default Home;
