import React from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
        <SectionTitle heading={"Toy Show"}></SectionTitle>
        <div className="bg-red-200 p-10 section">
        
      <div className="img-content-sec grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="img-sec">
          <img src="https://i.ibb.co/5G0Tb3r/autos-toy-cars-play-vehicles.jpg" alt="" />
        </div>
        <div className="img-con text-center">
          <h2 className="text-3xl font-bold">Show Toy!</h2>
          <h4 className="text-2xl my-4">The New Standard In Customizability & Speed</h4>
          <p className="mb-4 text-xl">
            Use drag-and-drop sections and blocks to create custom pages
            throughout your store without special coding. The theme comes with
            flexible, well-designed blocks for images, products, video, quotes
            and more.
          </p>
          <a href="" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
