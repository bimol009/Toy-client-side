import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllToyCard from './AllToyCard';

const AllToy = () => {

    const [allToy,setAllToy] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/AllToyShow/")
          .then((res) => res.json())
          .then((data) => setAllToy(data));
      }, []);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-5">
            {
                allToy?.map(toy=><AllToyCard key={toy._id} toy={toy}></AllToyCard>)
            }

            
        </div>
    );
};

export default AllToy;