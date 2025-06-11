// src/front/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MySecureApp. All rights reserved.</p>
    </footer>
  );
};