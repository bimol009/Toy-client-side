import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllToyCard from "./AllToyCard";

const AllToy = () => {
  const [allToy, setAllToy] = useState();
  const [showPage, setShowPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


useEffect(() => {
    fetch(`https://toy-web-server-side.vercel.app/AllToyShow?page=${showPage}`)
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
    <div className="mt-5">

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
        
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Rating</th>
            
            </tr>
          </thead>
          <tbody>
           
              {allToy?.map((toy) => (
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
