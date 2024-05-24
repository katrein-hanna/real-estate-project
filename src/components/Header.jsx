import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

function Header() {
  return (
    <header className="py-4 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="">
            Login
          </Link>
          <Link
            className="hover:bg-violet-800 bg-violet-700 text-white px-4 py-3 rounded-lg transition"
            to=""
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
