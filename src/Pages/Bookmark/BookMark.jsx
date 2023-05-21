import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const BookMark = () => {
  const ShowData = useLoaderData();

  const { price, picture, name, category, about, rating } = ShowData;

  console.log(ShowData);

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>category: {category}</p>
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
            <button className="btn btn-primary">ShowData</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMark;
