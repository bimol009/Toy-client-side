import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import BookCard from './BookCard';

const MyToy = () => {
    const {user} = useContext(AuthContext)

    const [bookCard,setBookCard] = useState([])

    const url = `http://localhost:5000/addBook?email=${user?.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookCard(data))
    },[url])

    return (
    
   <div className="overflow-x-auto w-full">
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
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        bookCard?.map(toy=><BookCard key={toy._id} toy={toy}></BookCard>)
     }
  
  
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