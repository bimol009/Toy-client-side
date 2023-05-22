import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ toy, handleDelete }) => {
  const { customerName, photo, email, category, _id, quantity,name } = toy;
  

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{customerName}</span>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{quantity}</span>
      </td>

      <th>
        <Link to={`/update/${_id}`}>
          <button className="btn btn-primary">Update</button>
        </Link>
      </th>
      <th>
        <Link to={`/book/${_id}`}>
          <button className="flex items-center gap-2 btn btn-primary">
            Details
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default BookCard;
