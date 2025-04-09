import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import bgImg from "../assets/bgImg.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  //const [formData, setFormData] = useState({ email: "", password: "" });
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputEmail == "" || inputPassword == "") {
      alert("Please insert details");
      setMessage("Please insert details");
    } else {
      axios
        .get("http://localhost:3000/user")
        .then((response) => {
          const allUser = response.data;
          allUser.map((user) => {
            // console.log("User: ", user);
            if (user.email == inputEmail && user.password == inputPassword) {
              localStorage.setItem("Current_User", JSON.stringify(user));
              alert("Login Successful");
              navigate("/home");
            }
          });
          setMessage("Please Insert Proper Email or Password");
        })
        .catch((error) => {
          alert("Login Failed");
          console.log("Login Failed", error.message);
          setMessage(error.message);
        });
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
      <Image src={bgImg} />
    </>
  );
};

export default Login;
