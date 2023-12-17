// ContactUs.js
import React from "react";
import { Link } from "react-router-dom";
import '../page/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function ContactUs() {
  const containerStyle = {
    backgroundColor: "#E1EAF2",
    position: "relative",
    width: "100%",
    
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
  
  const navLinkStylee = {
    color: "#000000",
    fontSize: "25px",
    lineHeight: "70px",
    padding: "0 20px",
    marginLeft: "60px", // Memindahkan tautan navigasi ke pojok kiri
  };
  
  


  return (
    <div style={containerStyle}>
      <div style={navStyle}>
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
          <Link to="/me" style={navLinkStylee}>
          <FontAwesomeIcon icon={faUser} /> {/* Ganti "faUser" dengan ikon yang diinginkan */}
        </Link>
        </div>
      </div>

      <section className="contact-section background">
      <div className="text-wrapper">Contact Us!</div>
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-left">
              
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Your Email" />
                </div>
              </form>
            </div>
            <div className="contact-right">
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Your Message"></textarea>
              </div>
              <button className="btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </section>
      <div style={footerStyle}>
        <p style={footerTextStyle}>
          &copy; {new Date().getFullYear()} CleanFun.
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
