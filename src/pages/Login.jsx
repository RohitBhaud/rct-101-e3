import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom"
import "./Login.css";
const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate()

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", data)
      .then((res) => {
        login(res.data.token);
        console.log("token" ,res.data.token)
        navigate('/')
        alert("Login successful");
      }).catch((err) => {alert(err.message)});
      
  };
 
  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={handleChange}
        />
      <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
