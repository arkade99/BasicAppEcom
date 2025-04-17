import React from "react";

function Authentication() {
  const token = JSON.parse(localStorage.getItem("Current_User"));
  console.log(token);
  return <div>Authentication</div>;
}

export default Authentication;
