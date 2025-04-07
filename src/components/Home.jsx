import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    localStorage.removeItem("User");
    navigate("/");
  };
  const [apiData, setApiData] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response)
  //     .then((data) => data.json())
  //     .then((data) => setApiData(data));
  // }, []);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setApiData(response.data));
  }, []);
  return (
    <>
      <div className="main-page">
        <h2>Wellcome</h2>
        <h4>JSON Data fetch using axios</h4>
        <ul>
          {apiData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <Button onClick={handelClick} variant="danger">
          Bye Bye
        </Button>
      </div>
    </>
  );
};

export default Home;
