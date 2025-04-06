import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import bgImg from "../assets/bgImg.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //const [formData, setFormData] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(email, password);
    if (email == "" || password == "") {
      alert("Please insert details");
    } else {
      const getAllData = JSON.parse(localStorage.getItem("User") || "[]");
      console.log("getAllData", getAllData);
      getAllData.map((user) => {
        if (user.email == email && user.password == password) {
          console.log(user.name);
          // setMessage("");
          alert("Wellcome " + user.name);
          navigate("/home");
        } else {
          return setMessage("Invalid Email/ Password");
        }
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
              onChange={handelInput}
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={handelInput}
              name="password"
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
