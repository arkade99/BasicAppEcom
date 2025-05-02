import React, { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    localStorage.removeItem("Current_User");
    navigate("/login");
  };
  const validateToken = (e) => {
    const token = JSON.parse(localStorage.getItem("Current_User"));
    if (token == null) {
      e.preventDefault();
      alert("Please Log in"), navigate("/login");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a
            onClick={validateToken}
            href="/home"
            className="hover:text-blue-500"
          >
            <img src="/Logo.svg" alt="Logo" className="w-32 h-auto" />
          </a>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <img
                  src="/Cross-SM-Icon.svg"
                  alt="Logo"
                  className="w-32 h-auto"
                />
              ) : (
                <img
                  src="/Menu-SM-Icon.svg"
                  alt="Logo"
                  className="w-32 h-auto"
                />
              )}
            </button>
          </div>

          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li>
              <a
                onClick={validateToken}
                href="/home"
                className="hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-500">
                SignUp
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-blue-500">
                Log In
              </a>
            </li>
            <li>
              <Button onClick={handelClick}>Log Out</Button>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
            <li>
              <a
                onClick={validateToken}
                href="/home"
                className="block hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a href="/" className="block hover:text-blue-500">
                Signup
              </a>
            </li>
            <li>
              <a href="/login" className="block hover:text-blue-500">
                Login
              </a>
            </li>
            <li>
              <Button onClick={handelClick}>Log Out</Button>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Header;
