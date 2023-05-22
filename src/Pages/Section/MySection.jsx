import React, { useEffect } from "react";
import "./MySection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MySection = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="mb-10">
      <div className="text-center mt-10 mb-10">
        <h2 className="text-4xl mb-3 font-extrabold">
          My Own <span className="text-red-400">Section</span>
        </h2>
        <p className="text-2xl">
          My name Is Bimol Sarker. I read Cse in Habhit Tangail.
        </p>
      </div>
      <div data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center text-justify">
        <div className=" img-content">
          <div className="text-center mt-10 mb-10">
            <h2 className="text-4xl mb-3 font-extrabold">
              <span className="text-green-500">Web Develop</span> Is My Life
            </h2>
            <p className="text-2xl">
              My name Is <span className="text-3xl font-semibold">Bimol Sarker</span>. I read Cse in Habhit Tangail. <br />
              This <span className="text-3xl text-orange-500 font-bold">BABY TOY</span> site is created by own.
            </p>
          </div>
        </div>
        <div className="img-section">
          <img
            src="https://i.ibb.co/LgzY0Q1/248672140-237903104922971-3040476626125467773-n-removebg-preview.png"
            alt=""data-aos="flip-up"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default MySection;
