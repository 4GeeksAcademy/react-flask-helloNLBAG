import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Private from './pages/Private';

const isAuthenticated = () => !!sessionStorage.getItem("token");

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={!isAuthenticated() ? <Login /> : <Navigate to="/private" />} />
        <Route path="signup" element={!isAuthenticated() ? <Signup /> : <Navigate to="/private" />} />
        <Route path="private" element={isAuthenticated() ? <Private /> : <Navigate to="/login" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
