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
    const payload = {
      email: inputEmail,
      password: inputPassword,
    };
    //console.log(payload);
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((response) => {
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.access_token)
        );
        alert("Successful");
        console.log("Success", response);
      })
      .catch((error) => {
        alert("Login Failed");
        console.log("Login Failed", error);
      });
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
