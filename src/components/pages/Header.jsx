import React from "react";
import "../../styles/components/__index.css";
import { logo } from "../../assets/index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-toggleable-md fixed-top">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="logo">
        <img className="imageLogo" src={logo} alt="Logo" />
      </a>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link " href="#">
            <Link to={'/'}  className="button -underline text-white goHome" href="#">Home</Link>
            </a>
          </li>
          <li className="nav-item active">
          <Link to={'/blog'}  className="button -underline text-white" href="#">Blogs</Link>
           
          </li>
          <li className="nav-item active">
          <Link to={'/about'}  className="button -underline text-white" href="#">About us</Link>
          </li>
          {/* <li className="nav-item active">
          <Link to={'/contact'}  className="button -underline text-white" href="#">Contact</Link>
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search here..."
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Download App
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
