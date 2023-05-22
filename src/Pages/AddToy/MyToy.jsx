import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import BookCard from "./BookCard";

const MyToy = () => {
  const [bookCard, setBookCard] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://toy-web-server-side.vercel.app/addBook?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookCard(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure to delete This Items");
    if (proceed) {
      fetch(`https://toy-web-server-side.vercel.app/addBook/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("SuccessFully Deleted Items");
            const remaining = bookCard.filter((book) => book._id !== id);
            setBookCard(remaining);
          }
        });
    }
  };

  return (
    
    <div className="overflow-x-auto  w-full mt-5 mb-5">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Quantity</th>
        <th>Update Button</th>
        <th>Details Button</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
      {bookCard?.map((toy) => (
            <BookCard
              key={toy._id}
              toy={toy}
              handleDelete={handleDelete}
            ></BookCard>
          ))}
    
    </tbody>
    
    
  </table>
</div>

  );
};

export default MyToy;
