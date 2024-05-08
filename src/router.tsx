import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminPAge from './pages/AdminPage';
import TrainerPage from './pages/TrainerPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/admin" Component={AdminPAge} />
      <Route path="/trainer" Component={TrainerPage} />
      <Route path="/profile" Component={ProfilePage} />
      <Route path="/about" Component={AboutPage} />
    </Routes>
  );
};

export default RouterWrapper;
