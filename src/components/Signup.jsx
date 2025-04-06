import React, { useState } from "react";
import bgImg from "../assets/bgImg.jpg";
import { Button, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handelInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Form Data Submitted:", formData);
    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.password == ""
    ) {
      alert("Please insert details");
    } else {
      const getData = JSON.parse(localStorage.getItem("User") || "[]");
      console.log(getData);
      let arr = [];
      arr = [...getData];
      arr.push(formData);
      localStorage.setItem("User", JSON.stringify(arr));
      alert("Successful");
      navigate("/login");
    }
  };
  return (
    <>
      <div className="main-page">
        <div>
          <p className="heading">Sign Up</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={handelInput}
              name="name"
            />
          </Form.Group>
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
              placeholder="Password"
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
            Already have an account?<a href="/login">LogIn</a>
          </p>
        </div>
      </div>
      <Image src={bgImg} />
    </>
  );
};

export default Signup;
