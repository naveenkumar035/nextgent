import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Foot from "./components/Foot";




export const metadata = {
  title: "NextGen",
  description: "Discover world-class training at Next Gen Athlete Sports Academy. Our expert coaches and state-of-the-art facilities are designed to help young athletes excel. Train like a champion with us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  >
        <div className="pt-1" >
        <Nav/>
        </div>
       
        <main>
        {children}
        </main>
        <Foot/>
        </body>  
       
    </html>
    
  );
}
