import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import SignIn from "views/auth/SignIn";
import AuthLayout from "layouts/auth";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("authUser")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoggedIn(localStorage.getItem("authUser"));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Navigate to="/admin/dashboard" />
          ) : (
            <Navigate to="/auth/sign-in" />
          )
        }
      />
      <Route
        path="auth/*"
        element={
          isLoggedIn ? <Navigate to="/admin/dashboard" /> : <AuthLayout />
        }
      />
      <Route
        path="admin/*"
        element={isLoggedIn ? <AdminLayout /> : <Navigate to="/auth/sign-in" />}
      />
    </Routes>
  );
};

export default App;
