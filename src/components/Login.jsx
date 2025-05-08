import React, { useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FetchUserData } from "./FetchData";
import "./style/FormStyle.css";

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
      <div className="flex common-padding">
        <div className="max-lg:hidden w-1/2 max-h-[550px]">
          <img
            src="/Images/LoginPageImg.jpg"
            className="w-full max-h-[550px]"
          />
        </div>
        <div className="lg:w-1/2 lg:max-h-[400px] form-card mt-[5%] relative">
          <Form onSubmit={handleSubmit} className="space-y-6 max-lg:pb-4">
            <p className="heading text-center">Log In</p>
            <h4 className="error-message">{message}</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-lable">Email address</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter email"
                onChange={(e) => setInputEmail(e.target.value)}
                className="form-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-lable">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={(e) => setInputPassword(e.target.value)}
                className="form-input"
              />
            </Form.Group>

            <div className="grid grid-cols-4 py-6">
              <Button variant="success" type="submit" className="submit-button">
                Submit
              </Button>
            </div>
          </Form>
          <div className="text-bottom absolute left-6 bottom-5">
            Don't have an account?
            <a href="/" className="text-blue-700 hover:underline">
              Sign Up Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
