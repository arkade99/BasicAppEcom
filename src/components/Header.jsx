import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import "./style/HeaderStyle.css";

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
    <div className="lg:flex">
      <ul className="lg:flex font-jakarta-sans text-[18px] lg:text-xl font-medium items-center lg:justify-end mr-6 header-ul">
        <li>
          <a onClick={validateToken} href="/home">
            HOME
          </a>
        </li>
        <li>
          <a href="/">SIGNUP</a>
        </li>
        <li>
          <a href="/login">LOG IN</a>
        </li>
      </ul>
      <ul className="max-lg:mt-auto max-lg:pt-6 lg:flex max-lg:absolute max-lg:bottom-8">
        <li className="lg:p-4">
          <Logout />
        </li>
        <p className="text-lightGray text-[1rem] heading-[130%] tracking-[-0.02rem] lg:hidden">
          Copyright © 2025 | All Rights Reserved
        </p>
      </ul>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="flex justify-between mx-auto items-center bg-transparent px-[0.5rem] sm:px-[1rem] md:px-[1.5rem] lg:px-[2rem] xl:px-[1.5rem] 2xl:px-[3.62rem] 3xl:px-[6.62rem] py-[2.5rem]">
      <a
        onClick={validateToken}
        href="/home"
        className="text-3xl font-bold leading-none w-3/12 md:w-3/12 lg:w-2/12 max-sm:ml-[1rem] max-md:ml-[0.5rem]"
      >
        <img
          src="Images/logoipsum-344.svg"
          alt="Logo"
          className=" lg:w-3xs lg:h-[80px]"
        />
      </a>

      <div className="max-lg:hidden ">
        <NavLinks />
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="">
          {isOpen ? (
            <img
              src="/Cross-SM-Icon.svg"
              alt="Logo"
              className="w-[32px] h-[120%]"
            />
          ) : (
            <img
              src="/Menu-SM-Icon.svg"
              alt="Logo"
              className="w-[32px] h-[120%]"
            />
          )}
        </button>
        {isOpen && (
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-[2.5rem] px-[1.5rem] py-[1.5rem] bg-background border-r overflow-y-auto">
            <a
              onClick={validateToken}
              href="/home"
              className="text-3xl font-bold leading-none w-4/12 md:w-6/12 lg:w-2/12 mb-[3rem] "
            >
              <img
                src="Images/logoipsum-344.svg"
                alt="Logo"
                className="w-full h-full"
              />
            </a>
            <NavLinks />
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Header;
