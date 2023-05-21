import React from "react";

const BookCard = ({ toy }) => {
  const { customerName, photo, email,category } = toy;

  return (
    <div>
      {/* row 1 */}

      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={photo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
           
            </div>
          </div>
        </td>
        <td>

          <span className="badge badge-ghost badge-sm">
          {email}
          </span>
        </td>
    
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default BookCard;
