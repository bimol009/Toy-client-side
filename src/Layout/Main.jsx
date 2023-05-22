import React from "react";
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
       <div  className="flex items-center  bg-red-200 mt-5 ">
       <img src="https://i.ibb.co/jvyJWJW/images-removebg-preview-1.png" alt="" />
        <img src="https://i.ibb.co/YjRJ1T5/download-removebg-preview.png" alt="" />
        <img src="https://i.ibb.co/TB7WhC3/download-1-removebg-preview-1.png" alt="" />
        <img src="https://i.ibb.co/FJkH4q7/download-2-removebg-preview.png" alt="" />
        <img src="https://i.ibb.co/vDwCsRj/ebd0d0370f72f217a3ed2e5da8db22b7-removebg-preview.png" alt="" />
        <img src="https://i.ibb.co/TB7WhC3/download-1-removebg-preview-1.png" alt="" />
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
