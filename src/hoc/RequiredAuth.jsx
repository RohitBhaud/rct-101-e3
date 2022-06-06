import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom'

const RequiredAuth = ({ children }) => {
  const navigate = useNavigate();
  const {isAuth} = useContext(AuthContext)
  
  if(isAuth){
    navigate("/")
  }
  else navigate("/login")
  return children;
};

export default RequiredAuth;
