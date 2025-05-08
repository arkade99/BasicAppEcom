import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style/FormStyle.css";

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
      navigate("/home");
    }
  };
  return (
    <>
      <div className="flex common-padding">
        <div className="w-1/2 max-h-[550px]">
          <img
            src="/Images/LoginPageImg.jpg"
            className="w-full max-h-[550px]"
          />
        </div>
        <div className="w-1/2 max-h-[450px] form-card mt-[5%] relative">
          <Form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <p className="heading text-center">Sign Up</p>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-lable">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={handelInput}
                name="name"
                className="form-input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-lable">Email address</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter email"
                onChange={handelInput}
                name="email"
                className="form-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-lable">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handelInput}
                name="password"
                className="form-input"
              />
            </Form.Group>
            <div className="grid grid-cols-4 py-6">
              <Button variant="success" type="submit" className="submit-button">
                Submit
              </Button>
            </div>
          </Form>
          <div className="text-bottom absolute left-5 bottom-5">
            <p>
              Already have an account?
              <a href="/login" className="text-blue-700 hover:underline">
                LogIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
