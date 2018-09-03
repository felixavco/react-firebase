import React, { Component } from "react";
import { Link } from 'react-router-dom'
import logo from "../../logo.svg";

class AppNavbar extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-dark">
          <nav className="navbar navbar-expand-lg navbar-dark container">
            <Link to="/" className="navbar-brand">
            <img className="App-logo" src={logo} width="30" height="30" alt=""/>
             React
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link" >
                    Home 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Link
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default AppNavbar;
