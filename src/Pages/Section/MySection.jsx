import React, { useEffect } from "react";
import "./MySection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MySection = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div>
      <div className="text-center mt-10 mb-10">
        <h2 className="text-4xl mb-3 font-extrabold">
          My Own <span className="text-red-400">Section</span>
        </h2>
        <p className="text-2xl">
          A Great Toy Car
        </p>
      </div>
      <div data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center text-justify">
        <div className=" img-content">
          <div className="text-center mt-10 mb-10">
            <h2 className="text-4xl mb-3 font-extrabold">
              <span className="text-green-500">Beautiful</span> Great Toy
            </h2>
            <p className="text-2xl">
              My name Is <span className="text-3xl font-semibold">Bimol Sarker</span>. I read Cse in Habhit Tangail. <br />
              This <span className="text-3xl text-orange-500 font-bold">BABY TOY</span> site is created by own.
            </p>
            <a href="" className="btn btn-outline btn-circle btn-error">BUY NOW</a>
          </div>
        </div>
        <div className="img-section">
          <img
            src="https://i.ibb.co/n1y8Jkb/png-clipart-model-car-toy-truck-toy-car-car-accident-photography-removebg-preview.png"
            alt=""data-aos="flip-up"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default MySection;
