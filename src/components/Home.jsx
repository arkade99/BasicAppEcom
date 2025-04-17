import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import Authentication from "./Authentication";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Current_User"));
    if (token == null) {
      alert("Please Log in"), navigate("/login");
    }
  }, []);
  const handelClick = () => {
    localStorage.removeItem("Current_User");
    navigate("/login");
  };
  const [apiData, setApiData] = useState();
  const getProfileData = () => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        // console.log(response.data);
        console.log("Response is", response);
        setApiData(response.data);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };
  console.log("ApiData: ", apiData);
  return (
    <>
      <div className="main-page">
        <h2>Wellcome</h2>
        <h4>JSON Data fetch using axios</h4>
        <Button onClick={getProfileData} variant="primary">
          Get Profile data
        </Button>
        {apiData && (
          <ul>
            <li>Name: {apiData[0].name}</li>
          </ul>
        )}
        {/*  */}
        <Button onClick={handelClick} variant="danger">
          Log Out
        </Button>
      </div>
    </>
  );
};

export default Home;
