import React from "react";
import "./CaroBanner.css";

const CaroBanner = () => {
  return (
    <div>
      <div className="text-center mt-10 mb-10">
        <h2 className="text-4xl mb-3 font-extrabold">
          Caro <span className="text-red-400">Section</span> Toy
        </h2>
   
      </div>

      <div className="carousel">
        <div id="item1" className="carousel-item w-full h-auto">
          <img src="https://i.ibb.co/wLtT8rx/call-me-fred-v-Vqc-DEgw-LY-unsplash.jpg" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/hspyy1f/mikko-o-rg-Mnd-GKTFYM-unsplash.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/ZHFHdFR/waldemar-n-YHc-Nnr-EJc-unsplash.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/7nfTT8G/lawrence-aritao-o-Fers-CYMd-Ac-unsplash.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default CaroBanner;
