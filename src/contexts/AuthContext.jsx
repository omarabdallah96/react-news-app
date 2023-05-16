import React, { createContext, useState, useEffect } from "react";
import API from "../helpers/API";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  const [errors, setErrors] = React.useState();

  useEffect(() => {
    // Check if the user is already logged in
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const response = await API.post("/checkLoggedIn", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Set the user data based on the response
      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error.response && error.response.status === 401) {
        logout();
      }
    }
  };

  const login = async (body) => {
    try {
      const response = await API.post("login", body);

      // Save the token to local storage
      localStorage.setItem("authToken", response.data?.token);

      // Set the user data based on the response
      setUser(response.data?.user);
      setToken(response.data?.token);

      // Return the response data
      return response.data;
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  const logout = async () => {
    try {
      await API.post("/logout");
      setUser(null);

      RemoToken();
    } catch (error) {
      console.log(error);
      setUser(null);
      RemoToken();
    }
  };

  const register = async (body) => {
    try {
      const response = await API.post("register", body);

      // Save the token to local storage
      localStorage.setItem("authToken", response.data?.token);

      // Set the user data based on the response
      setUser(response.data?.user);
      setToken(response.data?.token);
    } catch (error) {
      console.log(error);
      setToken(null);
      setUser(null);
    }
  };

  const RemoToken = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };
  const authContextValue = {
    user,
    loading,
    login,
    token,
    logout,
    register,
    errors,
    setErrors
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
