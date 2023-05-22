import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOutEmail} = useContext(AuthContext);

  const handleLogout = () => {
    logOutEmail()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li className="font-bold text-3xl">
        <Link>TOY DEALER</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to='/allToy'>All Toys</Link>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      {user?.email ? (
        <li>
          <>
          {user && (
                <img className="profile-img" src={user.photoURL} alt="" />
              )}
              {user && <p className="text-white">{user.displayName}</p>}
            <li>
              <Link to={'/addAToy'}>Add a Toy</Link>
            </li>
            <li>
              <Link to="/myToy">My Toy</Link>
            </li>
            <button onClick={handleLogout}>Logout</button>
          </>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-red-600 rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content text-white mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <img className="img2" src="https://i.ibb.co/tQt2vL9/240-F-248279748-Re9qnj7-RFjtf2lb-LVqnr5-SAQ7h-WGx3-DE-removebg-preview.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary">Toy</a>
  </div>
</div>
  );
};

export default Navbar;
