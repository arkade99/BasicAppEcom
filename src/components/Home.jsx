import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    localStorage.removeItem("User");
    navigate("/");
  };
  return (
    <>
      <div className="main-page">
        <h2>Wellcome</h2>
        <Button onClick={handelClick} variant="danger">
          Bye Bye
        </Button>
      </div>
    </>
  );
};

export default Home;
