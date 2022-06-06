import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);


  const login = () => {
    setToken(token);

    setIsAuth(true);
    console.log("login")
  };

  const logout = () => {
    setToken("");
    setIsAuth(false);
    console.log("logout")
  };

  return (
    <AuthContext.Provider value={{ isAuth, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
