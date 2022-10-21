import React from "react";
import "./Header.css";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileNav = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-blue-800 text-gray-300 w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute right-6 top-6 cursor-pointer "
      />

      <ul className="flex flex-col justify-center space-y-8 h-full items-center capitalize font-secondary">
        <Link to='/'><li className='nav-link'>Top News</li></Link>
        <Link to='/business'><li className='nav-link'>business</li></Link>
        <Link to='/tech'><li className='nav-link'>Tech</li></Link>
        <Link to='/sports'><li className='nav-link'>sports</li></Link>
        <Link to='/entertainment'><li className='nav-link'>entertainment</li></Link>
      </ul>
    </nav>
  );
};

export default MobileNav;
