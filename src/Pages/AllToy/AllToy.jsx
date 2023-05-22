import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllToyCard from "./AllToyCard";

const AllToy = () => {
  const [allToy, setAllToy] = useState();
  const [filtered, setFilteredData] = useState(allToy);
  const [showPage, setShowPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [value, setValue] = useState("");
  
  console.log(value);

  useEffect(() => {
    fetch(`https://toy-web-server-side.vercel.app/AllToyShow?page=${showPage}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data.data);
        setTotalPages(data.totalPages);
        setFilteredData(data.data)
      });
  }, [showPage]);

  const handleFilter = (event) => {
    setValue(event.target.value)
    const keyword = event.target.value;
    const filtered = allToy.filter(item =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handlePageChange = (page) => {
    setShowPage(page);
  };

  return (
    <div className="mt-5">
      <div className="p-5">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <a className="mb-5">
              Sorting
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <button className="btn btn-primary text-white">Acending</button>
              </li>
              <li>
                <button className="btn btn-primary text-white">
                  Decending
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="text-end mt-5 mb-5">
        <label htmlFor="">Search: </label>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
          value={value}
          onChange={(e)=>{handleFilter(e)}}
        />
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Rating</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {filtered
              ?.map((toy) => (
                <AllToyCard key={toy._id} toy={toy}></AllToyCard>
              ))}
          </tbody>
        </table>
      </div>

      <div className="btn-group text-center block my-5">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className={`btn ${page === showPage ? "btn-active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AllToy;
