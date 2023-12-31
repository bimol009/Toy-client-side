import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./StyleToySection.css";

const StyleToySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl mb-3 font-extrabold">
          Book Your <span className="text-red-400">Toy</span>
        </h2>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, beatae!
        </p>
      </div>
      <div className="rounded-xl p-5 mt-3 mb-3">
        <div className="hero mt-5">
          <div className="hero-content grid grid-cols-1 md:grid-cols-2">
            <img
              src="https://i.ibb.co/ZSfn8d4/mohit-suthar-0u-ZMa-Y-Ho4-unsplash.jpg"
              className="max-w-xl rounded-lg shadow-2xl"
              data-aos="flip-left"
            />
            <div className="">
              <h1 className="text-5xl font-bold">
                BABY <span className="text-red-500">TOY</span> SECTION
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to={"/addAToy"}>
                <button className="btn btn-primary">Book Your Toy</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="hero mb-5 ">
          <div className="hero-content grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1 className="text-5xl font-bold">
                BABY <span className="text-red-500">TOY</span> SECTION!
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to={"/addAToy"}>
                <button className="btn btn-primary">Book Your Toy</button>
              </Link>
            </div>
            <div>
              <img
                src="https://i.ibb.co/YpB85yd/gabriel-vasiliu-K-dq-I8-c-UMQ-unsplash.jpg"
                className="max-w-xl rounded-lg shadow-2xl"
                data-aos="flip-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleToySection;
