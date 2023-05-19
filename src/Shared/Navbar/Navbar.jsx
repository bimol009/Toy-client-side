import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

// import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOutEmail } = useContext(AuthContext);

  const handleLogout = () => {
    logOutEmail()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li className="font-bold text-3xl">
        <Link>Baby Toy</Link>
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
              <Link to="/bookings">Add a Toy</Link>
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
    <div className="navbar  h-28 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
       
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" >
          <img className="img2" src="https://i.ibb.co/tQt2vL9/240-F-248279748-Re9qnj7-RFjtf2lb-LVqnr5-SAQ7h-WGx3-DE-removebg-preview.png" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
   
        <a className="btn btn-primary">Toy Play</a>
      </div>
    </div>
  );
};

export default Navbar;
