import React,{useContext} from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { AuthContext } from "../../Provider/AuthProvider";

const BookMark = () => {
  const navigate = useNavigate();
  const navHandler = () => {
    navigate(-1);
  };
  const ShowData = useLoaderData();
  const {user} = useContext(AuthContext)

  const { price, picture, name, category, about, rating,quantity } = ShowData;



  return (
    <div>
      <div className="text-center mt-10 mb-10">
        <h2 className="text-4xl mb-3 font-extrabold">
           <span className="text-red-400">Details Show</span> Toy
        </h2>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, beatae!
        </p>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl mt-10 mb-10">
        <figure>
          <img src={picture} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Seller Name: {user?.displayName}</h2>
          <h2 className="card-title">Email: {user?.email}</h2>
          <p>category: {category}</p>
          <p>Quantity: {quantity}</p>
          <p>Ratings : {rating}</p>
          <Rating
            placeholderRating={rating}
            value={Math.round(rating || 0)}
            emptySymbol={<FaRegStar></FaRegStar>}
            readonly
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <p>Price: {price}</p>
          <p>{about}</p>
          <div className="card-actions justify-end">
            <button onClick={navHandler} className="btn btn-primary">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMark;
