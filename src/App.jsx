import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import SignIn from "views/auth/SignIn";

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
  console.log(isLoggedIn);
  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/admin/dashboard" /> : <SignIn />}
      />
      <Route
        path="admin/*"
        element={isLoggedIn ? <AdminLayout /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
