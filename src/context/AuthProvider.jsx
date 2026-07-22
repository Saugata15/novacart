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

  const registerNewUser = (data) => {
    setRegisteredUsers((prev) => [...prev, data]);
    console.log(data);
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  const loginUser = (data) => {
    let user = registeredUsers.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (user) {
      setLoggedInUser(user);
      return true;
    }
    return false;
  };

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
        registerNewUser,
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
