import Image from "next/image";
import About from "./components/About";
import Sports from "./components/Sports";
import Activities from "./components/Activities";
import Program from "./components/Program";
import Head from "next/head";
import Link from 'next/link';
import Her from "./components/Her";
import Hero from "./components/Hero";
import Heroin from "./components/Heroin";
import He from "./components/He";
import Summa from "./components/Summa";
import Programs from "./components/Programs";

 function Home() {
  return (
    <>
    <div>
    <Link rel="shortcut icon" href="/favicon/favicon.ico" />
     <Head>
        <title>NextGen</title>
        <meta name="description" content="As we look to the future, we aim to expand our reach and continue our tradition of excellence in tennis coaching. We are committed to discovering and nurturing the next generation of tennis champions, providing them with the resources and training they need to succeed on both national and international stages." />
        </Head>
    <div className=" flex flex-col h-screen bg-white snap-y snap-mandatory overflow-scroll z-0  " >   
    
      <section id="heroin" className="snap-start lg:hidden " >
      <Heroin/>
     </section>
     <section id="summa" className="snap-start sm:block hidden ">
      <Summa/>
     </section>
     <section id="her" className="snap-start sm:block hidden " >
       <Her/>
     </section>
     <section id="about" className="snap-center" >
      <About/>
     </section>
     <section id="sports" className="snap-center"  >
      <Sports/>
     </section>
     <section id="program" className="snap-start sm:block hidden" >
      <Program/>
     </section>
     <section id="programs" className="snap-start lg:hidden " >
      <Programs/>
     </section>
    
  </div>
  </div>
  </>
  );
}

export default Home;
