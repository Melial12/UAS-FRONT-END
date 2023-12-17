import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const containerStyle = {
  backgroundColor: "#E1EAF2",
  position: "relative",
  width: "100%",
  height: "100vh",
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "#ABC1E2",
};

const navLinkStyle = {
  color: "#000000",
  fontSize: "25px",
  lineHeight: "70px",
  textDecoration: "none",
  padding: "0 20px",
};

const footerStyle = {
  backgroundColor: "#ABC1E2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70px",
};

const footerTextStyle = {
  fontSize: "18px",
  color: "#FFFFFF",
};

function App() {
  return (
    <div style={containerStyle}>
      <div style={navStyle}>
        <Link to="/home" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/order" style={navLinkStyle}>
          Order
        </Link>
        <Link to="/blog" style={navLinkStyle}>
          Blog
        </Link>
        <Link to="/reg" style={navLinkStyle}>
          Sign Up
        </Link>
      </div>

      <Outlet /> {/* Ini adalah tempat di mana konten rute akan dirender. */}
      
      <div style={footerStyle}>
        <p style={footerTextStyle}>
          &copy; {new Date().getFullYear()} CleanFun.
        </p>
      </div>
    </div>
  );
}

export default App;
