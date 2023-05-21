import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllToyCard from "./AllToyCard";

const AllToy = () => {
  const [allToy, setAllToy] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/AllToyShow/")
      .then((res) => res.json())
      .then((data) => setAllToy(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <div className="grid grid-cols-1 gap-4 overflow-x-auto w-full table">
              {allToy?.map((toy) => (
                <AllToyCard key={toy._id} toy={toy}></AllToyCard>
              ))}
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
