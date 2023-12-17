import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page/login.css';
import '../page/responsive.css'; // Import responsive styles
import { Link } from 'react-router-dom';

function LoginPage() {
  const containerStyle = {
    backgroundColor: '#E1EAF2',
    position: 'relative',
    width: '100%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Tambahkan properti boxShadow di sini
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
      </div>
      <section className="contact-section background">
        <div className="text-wrapper">SIGN UP!</div>
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-left">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" placeholder="Your Password" />
                </div>
                <div className="form-group">
                  <label>Re-Password</label>
                  <input type="password" placeholder="Re-Password" />
                </div>
              </form>
            </div>
            <div className="contact-right">
              <Link to="/login">
                <button className="btn style1 w-100 d-block" fdprocessedid="rtahbg">
                  SIGN UP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
