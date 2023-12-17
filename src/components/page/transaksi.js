import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import '../page/transaksi.css';

class FormReservasi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      tanggal: '',
      layanan: '',
      metodePembayaran: '',
      isSubmitted: false
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    this.setState({ isSubmitted: true });
    alert('Reservasi berhasil disimpan');
  }

  render() {
    const containerStyle = {
      backgroundColor: "#E1EAF2",
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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
            <Link to="/contact" style={navLinkStyle}>
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <Link to="/me" style={navLinkStyle}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </div>

        <form className="form-reservasi" onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={this.handleChange} />
        </label>
        <label>
          No Handphone:
          <input type="no" name="no" onChange={this.handleChange} />
        </label>
        <label>
          Alamat Lengkap:
          <input type="alamat" name="alamat" onChange={this.handleChange} />
        </label>
        <label>
          Tanggal:
          <input type="date" name="tanggal" onChange={this.handleChange} />
        </label>
        <label>
          Layanan:
          <select name="layanan" onChange={this.handleChange}>
            <option value="">--Pilih Layanan--</option>
            <option value="kitchen">KITCHEN CLEANING</option>
            <option value="home">HOME CLEANING</option>
            <option value="bathroom">BATHROOM </option>
            <option value="carpet"> CARPET CLEANING</option>
          </select>
        </label>
        <label>
          Harga:
          <select name="layanan" onChange={this.handleChange}>
            <option value="">--Kategori Harga--</option>
            <option value="kitchen">Umum RP. 70.000/Jam</option>
            <option value="home">Small RP. 130.000/2Jam</option>
            <option value="bathroom">Medium RP. 250.000/4Jam </option>
            <option value="carpet"> Large RP. 370.000/6Jam</option>
          </select>
        </label>
        <label>
          Metode Pembayaran:
          <select name="metodePembayaran" onChange={this.handleChange}>
            <option value="">--Pilih Metode Pembayaran--</option>
            <option value="dana">Dana</option>
            <option value="cash">Cash</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        {this.state.isSubmitted && <p>Reservasi berhasil disimpan</p>}
      </form>

        <div style={footerStyle}>
          <p style={footerTextStyle}>
            &copy; {new Date().getFullYear()} CleanFun.
          </p>
        </div>
      </div>
    );
  }
}

export default FormReservasi;
