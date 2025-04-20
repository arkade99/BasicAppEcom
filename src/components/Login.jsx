import React, { useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import bgImg from "../assets/bgImg.jpg";
import { useNavigate } from "react-router-dom";
import { FetchUserData } from "./FetchData";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [message, setMessage] = useState("");
  const [allUserData, setAllUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await FetchUserData();
        setAllUserData(result);
      } catch (error) {
        console.error("Failed to fetch data in Login:", error);
      }
    };
    getData();
    console.log("allUserData: ", allUserData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputEmail == "" || inputPassword == "") {
      alert("Please insert details");
      setMessage("Please insert details");
    } else {
      allUserData.map((user) => {
        if (user.email == inputEmail && user.password == inputPassword) {
          localStorage.setItem("Current_User", JSON.stringify(user));
          alert("Login Successful");
          navigate("/home");
        }
      });
      setMessage("Please Insert Proper Email or Password");
    }
  };
  return (
    <>
      <div className="main-page">
        <div>
          <p className="heading">Log In</p>
        </div>
        <h4 style={{ color: "red" }}>{message}</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter email"
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
        <div className="account">
          <p>
            Don't have an account?<a href="/">Sign Up Now</a>
          </p>
        </div>
      </div>
      <br />
      <p>npx json-server --watch db.json</p>
      <br />
      <Image src={bgImg} />
    </>
  );
};

export default Login;
