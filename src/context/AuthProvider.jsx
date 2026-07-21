import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("loggedInUser")) || null;
    } catch {
      return null;
    }
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("registeredUsers")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        registeredUsers,
        setRegisteredUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
