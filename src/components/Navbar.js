import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-12 flex justify-around items-center border-b-2 border-b-lime-900">
      <h1>
        Influencers<span className="text-red-500">.</span>
      </h1>
      <Link to="/login" className="bg-indigo-500 hover:bg-indigo-700  text-white py-1.5 px-5 text-center rounded-full">
        Login
      </Link>
    </div>
  );
}

export default Navbar;
