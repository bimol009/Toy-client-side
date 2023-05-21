import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const AllToyCard = ({toy}) => {

    const {price,picture,name,_id,rating}= toy

    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">{name}</h2>
      
            <div className="card-actions justify-between">
            <Link to={'/addAToy'}>
                <button className="btn btn-primary">
                  Book
                </button>
              </Link>
              <div>
                <p className="font-bold text-red-500">Ratings: {rating}</p>
    
                <Rating
                  placeholderRating={rating}
                  value={Math.round(rating || 0)}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  readonly
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
              </div>
              <Link to={`/book/${_id}`}>
                <button className="flex items-center gap-2 btn btn-primary">
                  Details <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllToyCard;