import React from "react";
import { Link } from "react-router-dom";
import { BiLogoReact } from "react-icons/bi";


const Navbar = () => {
  return (
    <nav className="bg-slate-800 shadow-gray-50 flex items-center justify-around p-4">
      <Link to="/">
        <span className="font-semibold text-lg flex items-center gap-4 text-blue-400">
          <BiLogoReact className="text-4xl" />
          React Router
        </span>
      </Link>

      <div className="flex items-center gap-5 text-white">
        <Link
          to="/"
          className="py-1 px-3 text-lg font-light hover:text-sky-300 hover:bg-slate-700 rounded-xl transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="py-1 px-3 text-lg font-light hover:text-sky-300 hover:bg-slate-700 rounded-xl transition duration-300"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="py-1 px-3 text-lg font-light hover:text-sky-300 hover:bg-slate-700 rounded-xl transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
