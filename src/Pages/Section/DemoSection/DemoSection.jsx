import React from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import './DemoSection.css'

const DemoSection = () => {
  return (
  <div>
     <SectionTitle heading={"Our Demo"}></SectionTitle>
      <div className="mb-10 mt-10 backImg text-white bg-fixed">
     <h2 className="text-white font-bold text-center text-4xl mb-10 mt-10">My Demo Section</h2>
      <div className="md:flex justify-center items-center gap-24 ">
        <div>
          <img
            src="https://i.ibb.co/nsRrwvF/png-transparent-artikel-toy-detsky-mir-online-shopping-toy-compact-car-child-photography-removebg-pr.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-2xl">March 20, 2023</p>
          <p className="text-2xl">WHERE CAN I GET SOME?</p>
          <p>
            A multipurpose, flexible, fast and SEO optimized Opencart theme for
            any type of Ecommerce (Online Shop)
          </p>
          <button className="btn btn-outline text-white border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DemoSection;
