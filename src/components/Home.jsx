import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const [apiData, setApiData] = useState();
  const getProfileData = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const header = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((response) => {
        console.log(response.data);
        console.log("Response is", response);
        setApiData(response.data);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  console.log("ApiData: ", apiData);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => setApiData(response.data));
  // }, []);
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
            <li>Name: {apiData.name}</li>
            <li>
              Profile Picture: <img src={apiData.avatar} />
            </li>
            <li>email: {apiData.email}</li>
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
