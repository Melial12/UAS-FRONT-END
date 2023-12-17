// BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../page/blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function BlogPage() {
  const containerStyle = {
    backgroundColor: "#E1EAF2",
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  const navLinkStylee = {
    color: "#000000",
    fontSize: "25px",
    lineHeight: "70px",
    padding: "0 20px",
    marginLeft: "60px", // Memindahkan tautan navigasi ke pojok kiri
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#ABC1E2",
    padding: "10px 0",
  };

  const navLinkStyle = {
    color: "#000000",
    fontSize: "25px",
    lineHeight: "40px",
    textDecoration: "none",
    padding: "0 20px",
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Added to center content vertically
    textAlign: "center", // Added to center text horizontally
    padding: "20px",
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

  return (
    <div style={containerStyle}>
      <div style={navStyle}>
        <div>
          <Link to="/" style={navLinkStyle}>
            Home
          </Link>
          <Link to="/order" style={navLinkStyle}>
            Order
          </Link>
          <Link to="/blog" style={navLinkStyle}>
            Blog
          </Link>
          <Link to="/contact" style={navLinkStylee}>
          <FontAwesomeIcon icon={faEnvelope} /> {/* Ganti "faEnvelope" dengan ikon yang diinginkan */}
        </Link>
          <Link to="/me" style={navLinkStylee}>
          <FontAwesomeIcon icon={faUser} /> {/* Ganti "faUser" dengan ikon yang diinginkan */}
        </Link>
        </div>
      </div>

      <section style={contentStyle}>
        <div className="text-wrapper">About Us!</div>
        <p className="blog-description">
          Menjadi Pasangan Anda dalam Menjaga Kebersihan. Di Clean Fun, kami adalah tim profesional yang berkomitmen
          untuk memberikan layanan pembersihan terbaik bagi rumah dan bisnis Anda. Kami percaya bahwa kebersihan adalah
          kunci untuk kesehatan dan kenyamanan, dan kami berdedikasi untuk membuat lingkungan Anda selalu bersih dan
          rapi. Dalam perjalanan kami, misi utama kami adalah menyediakan pelayanan pembersihan yang tidak hanya
          memenuhi ekspektasi, tetapi juga melampaui harapan. Kami menjalani setiap tugas dengan ketelitian,
          kepedulian, dan kualitas yang tak tertandingi.
        </p>
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
