import React from "react";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const token = JSON.parse(localStorage.getItem("Current_User"));
  console.log(token);
  if (token == null) {
    const navigate = useNavigate();
    alert("Please Log in"), navigate("/login");
  }
  return true;
}

export default Authentication;
