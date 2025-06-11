import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem", minHeight: "80vh" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
