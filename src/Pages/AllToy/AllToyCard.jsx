import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const AllToyCard = ({toy}) => {

    const {price,picture,name,_id}= toy

    return (
        <div>
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        {name}
         
        </h2>
        <div className="card-actions justify-between">
     <Link to={"/register"}> <p className="font-bold text-red-500">Price: {price}</p></Link>
        <Link to={`/checkout/${_id}`}><button className='flex items-center gap-2'>Details <FaArrowRight/></button></Link>
      </div>
      </div>
    </div>
  </div>
    );
};

export default AllToyCard;