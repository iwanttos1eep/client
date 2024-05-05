import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import TrainerPage from "./pages/TrainerPage";


const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/trainer" Component={TrainerPage} /> 
    </Routes>
  );
};

export default RouterWrapper;
