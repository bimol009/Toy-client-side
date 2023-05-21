import React from "react";
import { Link } from "react-router-dom";

import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const AllToyCard = ({ toy }) => {
  const { price, picture, name, _id, rating, category } = toy;
  console.log(toy);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{category}</span>
      </td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    <th>
    <Link to={`/book/${_id}`}>
        <button className="flex items-center gap-2 btn btn-primary">
          Details <FaArrowRight />
        </button>
      </Link>
    </th>
    </tr>
  );
};

export default AllToyCard;
