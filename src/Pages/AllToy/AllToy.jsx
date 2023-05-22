import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllToyCard from "./AllToyCard";

const AllToy = () => {
  const [allToy, setAllToy] = useState();
  const [showPage, setShowPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


useEffect(() => {
    fetch(`http://localhost:5000/AllToyShow?page=${showPage}`)
        .then((res) => res.json())
        .then((data) => {
            setAllToy(data.data);
            setTotalPages(data.totalPages);
        });
}, [showPage]);

const handlePageChange = (page) => {
    setShowPage(page);
};

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
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <div className="grid grid-cols-1 gap-4 overflow-x-auto w-full table justify-items-center">
              {allToy?.map((toy) => (
                <AllToyCard key={toy._id} toy={toy}></AllToyCard>
              ))}
            </div>
          </tbody>
        </table>
      </div>


      <div className="btn-group text-center block my-5">
				{Array.from({ length: totalPages }, (_, index) => index + 1).map(
					(page) => (
						<button
							key={page}
							className={`btn ${page === showPage ? 'btn-active' : ''}`}
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
