import React from 'react';
import { Link } from 'react-router-dom';
import '../page/me.css';
import LOGO from '../img/woman.png'

const Profil = () => {
  const containerStyle = {
    backgroundColor: '#E1EAF2',
    position: 'relative',
    width: '100%',
    minHeight: "100vh",
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ABC1E2',
  };

  const navLinkStyle = {
    color: '#000000',
    fontSize: '25px',
    lineHeight: '70px',
    textDecoration: 'none',
    padding: '0 20px',
  };
  const titleStylee = {
    fontSize: "40px",
    marginBottom: "50px",
    textAlign: "center",
    marginTop: "70px",
  };
  const buttonStyle = {
    fontSize: "15px",
    padding: "10px 90px",
    backgroundColor: "#0088cc",
    color: "#ffffff",
    borderRadius: "10px",
    textDecoration: "none",
    display: "block", // Ensures the button is treated as a block-level element
    margin: "auto", // Centers the button horizontally
  };

  return (
    <div style={containerStyle}>
      <div style={navStyle}>
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/order" style={navLinkStyle}>
          Order
        </Link>
        <Link to="/blog" style={navLinkStyle}>
          Blog
        </Link>
        {/* Add more navigation links as needed */}
      </div>
      <h1 style={titleStylee}>YOUR PROFILE!</h1>
      <div className="profile-container">
      <div className="skills--section--img">
                <img src={LOGO} alt="Product Chain" />
              </div>
        <div className="info-container">
          <div className="name">Melia Madzrongatul</div>
          <div className="email">Email: melia12@gmail.com</div>
        </div>

        <div className="button-container">
          <Link to="/login" style={buttonStyle}>
            LOG OUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profil;
