import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/CF.png";
import icon from "../img/bg.jpg";
import User from "../img/user.png";
import home from "../img/room.png";
import bath from "../img/toilet.png";
import carpet from "../img/carpet.png";
import LOGO from "../img/CF.png";
import Harga from "../img/tag.png";
import img from "../img/kitchen.png";
import data from '../../data/index.json';
import '../page/dashboard.css';
import Layout from '../page/layout.js';

function Home() {
  const containerStyle = {
    backgroundColor: "#E1EAF2",
    position: "relative",
    width: "100%",
    minHeight: "100vh",
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

  const logoStyle = {
    width: "500px",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    width: "603px",
    height: "597px",
    borderRadius: "45px",
    margin: "50px 0",
    maxWidth: "100%",
  };

  const contentContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    maxWidth: "50%",
    
  };

  const titleStyle = {
    fontSize: "40px",
    marginBottom: "10px",
  };
  const titleStylee = {
    fontSize: "40px",
    marginBottom: "50px",
    textAlign: "center",
    marginTop: "40px",
  };

  const subTitleStyle = {
    fontSize: "20px",
    marginBottom: "10px",
  };
  

  const buttonStyle = {
    fontSize: "15px",
    padding: "8px 90px",
    backgroundColor: "#0088cc",
    color: "#ffffff",
    borderRadius: "10px",
    textDecoration: "none",
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
  const blogDescriptionStyle = {
    fontSize: "25px",
    lineHeight: "1.5",
    color: "#080808",
    marginBottom: "20px",
    textAlign: "center", // Center the text horizontally
    display: "flex",
    alignItems: "center", // Center the text vertically
    justifyContent: "center", // Center the text horizontally
  };
  

 
  // Create media query for smaller screens
  const mediaQuery = `@media (max-width: 768px) {
    img {
      max-width: 80%; // Adjust the maximum width as needed
    }
  }`;

  return (
    <Layout>
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
        <Link to="/login" style={navLinkStyle}>
          Login
        </Link>
      </div>

      <div style={contentContainerStyle}>
        <img src={icon} alt="icon" style={iconStyle} />
        <div style={contentStyle}>
          <h1 style={titleStyle}>WELCOME CLEAN FUN !</h1>
          
          <img src={logo} alt="logo" style={logoStyle} />
          <Link to="/order" style={buttonStyle}>
            SERVICE
          </Link>
          <p style={subTitleStyle}>
            Clean Fun membantumu membersihkan setiap sudut rumahmu!!
          </p>
        </div>
      </div>
      <div>
      <h1 style={titleStylee}>ABOUT US!</h1>
      </div>
      <p className="blog-description" style={blogDescriptionStyle}>
  Menjadi Pasangan Anda dalam Menjaga Kebersihan. Di Clean Fun, kami adalah tim profesional yang berkomitmen
  untuk memberikan layanan pembersihan terbaik bagi rumah dan bisnis Anda. Kami percaya bahwa kebersihan adalah
  kunci untuk kesehatan dan kenyamanan, dan kami berdedikasi untuk membuat lingkungan Anda selalu bersih dan
  rapi. Dalam perjalanan kami, misi utama kami adalah menyediakan pelayanan pembersihan yang tidak hanya
  memenuhi ekspektasi, tetapi juga melampaui harapan. Kami menjalani setiap tugas dengan ketelitian,
  kepedulian, dan kualitas yang tak tertandingi.
</p>

      <section className="skills--section" id="mySkills">
        <div className="portfolio--container">
          <h2 className="skills--section--heading">KATEGORY</h2>
        </div>
        <div className="skills--section--container">
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src={img} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">KITCHEN CLEANING</h3>
              <Link to="/login" style={buttonStyle}>
                ORDER
              </Link>
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src={home} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">HOME CLEANING</h3>
              <Link to="/login" style={buttonStyle}>
                ORDER
              </Link>
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src={bath} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">BATHROOM</h3>
              <Link to="/login" style={buttonStyle}>
                ORDER
              </Link>
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src={carpet} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">CARPET CLEANING</h3>
              <Link to="/login" style={buttonStyle}>
                ORDER
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="skills--section" id="mySkills">
        <div className="portfolio--container">
          <h2 className="skills--section--heading">DAILY CLEANING</h2>
        </div>
        <div className="skills--section--container">
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src={LOGO} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">CLEAN FUN</h3>
              <h3 className="skills--section--title">RP 70.000,-</h3>
              <h3 className="skills--section--title">/JAM</h3>
              
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src={Harga} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">SMALL</h3>
              <h3 className="skills--section--title">RP 130.000,-</h3>
              <h3 className="skills--section--title">MAX 2 JAM</h3>
              
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src={Harga} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">MEDIUM</h3>
              <h3 className="skills--section--title">RP 250.000,-</h3>
              <h3 className="skills--section--title">MAX 4 JAM</h3>
              
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src={Harga} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">LARGE</h3>
              <h3 className="skills--section--title">RP 370.000,-</h3>
              <h3 className="skills--section--title">MAX 6 JAM</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="skills--section" id="mySkills">
        <div className="portfolio--container">
          <h2 className="skills--section--heading">ULASAN</h2>
        </div>
        <div className="skills--section--container">
          {data?.skills?.map((item, index) => (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img src={User} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Link to="/user" style={buttonStylee}>
            Riwayat
          </Link>
      </section>

      <div style={footerStyle}>
        <p style={footerTextStyle}>
          &copy; {new Date().getFullYear()} CleanFun.
        </p>
      </div>

      {/* Place the <style> tag here */}
      <style>{mediaQuery}</style>
    </div>
    </Layout>
  );
}

export default Home;
