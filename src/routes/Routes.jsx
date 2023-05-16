import React, { Component, useContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Loginpage";
import { AuthContext, AuthContextProvider } from "../contexts/AuthContext";
import MyAppBar from "../components/AppBar";

import ProfilePage from "../pages/ProfilePage";

import RegisterPage from "../pages/RegisterPage";
import Loading from "../components/Loading";
import PreferencePage from "../pages/Prefrences";
import MyNewsPage from "../pages/MyNewsPage";

function Protected({ children }) {
  const { user, loading, token } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <MyAppBar />
      {children}
    </>
  );
}

function PublicRoute({ children }) {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }
  if (token) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

const routes = [
  {
    path: "/home",
    page: <HomePage />,
    isPrivate: true,
  },
  {
    path: "/my-news",
    page: <MyNewsPage />,
    isPrivate: true,
  },
  {
    path: "/profile",
    page: <ProfilePage />,
    isPrivate: true,
  },
  {
    path: "/preference",
    page: <PreferencePage />,
    isPrivate: true,
  },
  {
    path: "/",
    page: <LoginPage />,
    isPrivate: false,
  },
  {
    path: "/register",
    page: <RegisterPage />,
    isPrivate: false,
  },
  ,
];

function AppRoutes() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.isPrivate ? (
                  <Protected>{route.page}</Protected>
                ) : (
                  <PublicRoute>{route.page}</PublicRoute>
                )
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default AppRoutes;
