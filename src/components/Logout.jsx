import React from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    localStorage.removeItem("Current_User");
    navigate("/login");
  };
  return <button onClick={handelClick}>Log Out</button>;
};

export default Logout;
