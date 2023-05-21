import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import BookCard from "./BookCard";

const MyToy = () => {
  const [bookCard, setBookCard] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/addBook?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookCard(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure to delete This Items");
    if (proceed) {
      fetch(`http://localhost:5000/addBook/${id}`, {
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
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
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
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyToy;
