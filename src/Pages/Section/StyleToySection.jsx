import React from "react";
import { Link } from "react-router-dom";

const StyleToySection = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl mb-3 font-extrabold">
          Book Your  <span className="text-red-400">Toy</span>
        </h2>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, beatae!
        </p>
      </div>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/ZSfn8d4/mohit-suthar-0u-ZMa-Y-Ho4-unsplash.jpg"
            className="max-w-xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              BABY <span className="text-red-500">TOY</span> SECTION
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to={"/addAToy"}>
              <button className="btn btn-primary">Book Your Toy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleToySection;
