import React,{useEffect} from "react";
import Marquee from "react-fast-marquee";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "./../Shared/Footer/Footer";
import './Main.css'


const Main = () => {

  return (
    <div className="mt-2 mb-2 container mx-auto">
      <Navbar></Navbar>
      <Marquee className="rounded-xl">
       <div  className="flex items-center  bg-red-200 mt-5 main ">
       <img src="https://i.ibb.co/q70Wk6j/louis-magnotti-r-Ecn8-OB83-EI-unsplash-removebg-preview.png" alt="" />
        <img src="https://i.ibb.co/x2QsLTP/istockphoto-182680549-170667a-removebg-preview.png" alt="" />
        <img src="https://i.ibb.co/t32TQS6/call-me-fred-v-Vqc-DEgw-LY-unsplash-removebg-preview.png" alt="" />
        <img src="https://i.ibb.co/KLfBJkM/gabriel-vasiliu-O2-Kqx-JFa0c-Y-unsplash-removebg-preview.png" alt="" />
        <img src="https://i.ibb.co/vDwCsRj/ebd0d0370f72f217a3ed2e5da8db22b7-removebg-preview.png" alt="" />
        <img src="https://i.ibb.co/52Sy7vx/mourizal-zativa-x-ZUv-Fj-M-O8g-unsplash-removebg-preview.png" alt="" />
        <img src="https://i.ibb.co/wN6sqJL/istockphoto-620006890-612x612-removebg-preview.png" alt="" />
        <img src="https://i.ibb.co/cw9hWsM/rocket-car-green-yellow-color-1308-35102-removebg-preview.png" alt="" />
       </div>
      </Marquee>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
