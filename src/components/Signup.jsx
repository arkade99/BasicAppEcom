import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style/FormStyle.css";
import axios from "axios";
import { FetchUserData } from "./FetchData";

const Signup = () => {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
  });
  const [allUserData, setAllUserData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await FetchUserData();
        setAllUserData(result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const navigate = useNavigate();
  const handelInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.password == ""
    ) {
      alert("Please insert details");
    } else {
      const result = allUserData.find(({ email }) => email === formData.email);
      //console.log(result);
      if (result != null) {
        alert("User alredy exits");
        navigate("/login");
      } else {
        const nextId =
          allUserData.length > 0
            ? allUserData[allUserData.length - 1].id + 1
            : 0;
        //console.log("lastId", nextId);
        const newUser = {
          ...formData,
          id: nextId,
        };
        //console.log(newUser);

        try {
          const response = await axios.post(
            "http://localhost:3000/user",
            newUser
          );
          //console.log("Post created:", response.data);
          localStorage.setItem("Current_User", JSON.stringify(response.data));
          alert("Successful");
          navigate("/home");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <>
      <div className="flex common-padding">
        <div className="w-1/2 max-h-[550px] max-lg:hidden">
          <img
            src="/Images/LoginPageImg.jpg"
            className="w-full max-h-[550px]"
          />
        </div>
        <div className="lg:w-1/2 lg:max-h-[450px] form-card mt-[5%] relative">
          <Form onSubmit={handleSubmit} className="space-y-6 max-lg:pb-4">
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
          <div className="text-bottom absolute left-6 bottom-5">
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
