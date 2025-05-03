import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

const validateToken = (e) => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("Current_User"));
  if (token == null) {
    e.preventDefault();
    alert("Please Log in"), navigate("/login");
  }
};

const NavLinks = () => {
  return (
    <ul className="lg:flex">
      <li>
        <a onClick={validateToken} href="/home" className="p-4">
          Home
        </a>
      </li>
      <li>
        <a href="/" className="">
          SignUp
        </a>
      </li>
      <li>
        <a href="/login" className="">
          Log In
        </a>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="flex justify-between mx-auto items-center bg-transparent py-10">
      <a
        onClick={validateToken}
        href="/home"
        className="text-3xl font-bold leading-none w-4/12 md:w-3/12 lg:w-2/12"
      >
        <img
          src="Images/logoipsum-344.svg"
          alt="Logo"
          className="w-3xs h-[80px]"
        />
      </a>

      <div className="max-lg:hidden ">
        <NavLinks />
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="">
          {isOpen ? (
            <img src="/Cross-SM-Icon.svg" alt="Logo" className="" />
          ) : (
            <img src="/Menu-SM-Icon.svg" alt="Logo" className="" />
          )}
        </button>
        {isOpen && <NavLinks />}
      </div>
    </nav>
  );
};

export default Header;
