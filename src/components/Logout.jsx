import React from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    localStorage.removeItem("Current_User");
    alert("Logged Out");
    navigate("/login");
  };
  return (
    <button onClick={handelClick}>
      <img src="/Images/log-out.svg" className="w-8 h-8" />
    </button>
  );
};

export default Logout;
