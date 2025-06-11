import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!sessionStorage.getItem("token");

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MiApp</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        {isLoggedIn ? (
          <>
            <Link to="/private">Privado</Link>
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Registro</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
