import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="headerRow">
          <div className="headerLeft">
            <svg className="drawerIcon">
              <use href="../assets/icons/landing-icons.svg#menu-1" />
            </svg>
            <div className="brand">
              <h1 className="title">Pustaka</h1>
              <h2 className="subtitle">just another tokomo site</h2>
            </div>
          </div>
          <div className="searchContainer">
            <input
              placeholder="Type to search and hit enter"
              type="text"
              className="form-input"
            />
            <div className="bottomLine" />
            <div className="searchIconContainer">
              <svg className="searchIcon">
                <use href="../assets/icons/landing-icons.svg#magnifying-glass" />
              </svg>
            </div>
          </div>
          <a href="" className="link">
            Log In
          </a>
          <a href="" className="link">
            Cart
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
