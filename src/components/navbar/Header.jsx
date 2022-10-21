import React from "react";
import Navbar from "../navbar/Navbar";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = ({ setNavMobile }) => {
  return (
    <header className="py-3 bg-blue-800 text-white">
      <div className="mx-auto container">
        <div className="flex items-center justify-between">
          <Link to='/'><h1>News</h1></Link>
          <Navbar />
          {/* mobile nav */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl cursor-pointer"
          />
          {/* mobile nav ends */}
        </div>
      </div>
    </header>
  );
};

export default Header;
