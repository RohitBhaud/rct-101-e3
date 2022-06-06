import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Products from '../components/Products/Products'
import { AuthContext } from "../context/AuthContext";
const Home = () => {
  const {isAuth} = useContext(AuthContext)
const navigate = useNavigate()


if(!isAuth){
  navigate("/login")
  return (

    <div>
      not Authenticated  <Link to ="/login">login</Link>
    </div>
  )
}
return <Products/>
};

export default Home;
