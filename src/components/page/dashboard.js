import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page/dashboard.css';
import img from '../img/kitchen.png'
import home from '../img/room.png'
import bath from '../img/toilet.png'
import carpet from '../img/carpet.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function BlogPage() {
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
  const buttonStyle = {
    fontSize: "15px",
    padding: "8px 90px",
    backgroundColor: "#0088cc",
    color: "#ffffff",
    borderRadius: "10px",
    textDecoration: "none",
  };
  const buttonStylee = {
    fontSize: "15px",
    padding: "10px 90px",
    backgroundColor: "#0088cc",
    color: "#ffffff",
    borderRadius: "10px",
    textDecoration: "none",
    display: "block", // Ensures the button is treated as a block-level element
    margin: "auto", // Centers the button horizontally
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

      <section className="skills--section" id="mySkills">
        <div className="portfolio--container">

          <h2 className="skills--section--heading">KATEGORY</h2>
        </div>
        <div className="skills--section--container">
          {/* {data?.skills?.map((item, index) => ( */}
            <div className="skills--section--card">
              <div className="skills--section--img">
                <img src={img} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                {/* <h3 className="skills--section--title">"{item.title}"</h3>
                <p className="skills--section--description">{item.description}</p> */}
                <h3 className="skills--section--title">KITCHEN CLEANING</h3>
                <Link to="/harga" style={buttonStyle}>
                ORDER
                </Link>
              </div>
            </div>
            <div className="skills--section--card">
              <div className="skills--section--img">
                <img src={home} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                {/* <h3 className="skills--section--title">"{item.title}"</h3>
                <p className="skills--section--description">{item.description}</p> */}
                <h3 className="skills--section--title">HOME CLEANING</h3>
                <Link to="/harga" style={buttonStyle}>
                ORDER
                </Link>
              </div>
            </div>
            <div className="skills--section--card">
              <div className="skills--section--img">
                <img src={bath} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                {/* <h3 className="skills--section--title">"{item.title}"</h3>
                <p className="skills--section--description">{item.description}</p> */}
                <h3 className="skills--section--title">BATHROOM</h3>
                <Link to="/harga" style={buttonStyle}>
                ORDER
                </Link>
              </div>
            </div>
            <div className="skills--section--card">
              <div className="skills--section--img">
                <img src={carpet} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                {/* <h3 className="skills--section--title">"{item.title}"</h3>
                <p className="skills--section--description">{item.description}</p> */}
                <h3 className="skills--section--title">CARPET CLEANING</h3>
                <Link to="/harga" style={buttonStyle}>
                ORDER
                </Link>
              </div>
            </div>

          {/* ))} */}
        </div>
        <Link to="/ulasan" style={buttonStylee}>
        REVIEW
        </Link>
      </section>
      <div style={footerStyle}>
        <p style={footerTextStyle}>
          &copy; {new Date().getFullYear()} CleanFun.
        </p>
      </div>
    </div>
  );
}

export default BlogPage;
