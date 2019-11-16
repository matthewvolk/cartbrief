import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LogoImg from "./img/logo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <a href="/" className="logo">
        <div className="header text-center mb-0 mt-4">
          <img
            src={LogoImg}
            width="40px"
            alt="Ecommerce News Logo"
            style={{ margin: "0.5em" }}
          />
          <h1
            style={{
              fontWeight: "700",
              fontSize: "2.25em",
              color: "#332E2E",
              textDectoration: "none"
            }}
            className=""
          >
            CartBrief
          </h1>
          {/* <div className="mb-2">
            <h2
              style={{
                fontSize: "1rem",
                display: "inline",
                marginRight: "1em"
              }}
            >
              <strong>Status:</strong> <kbd>Loading...</kbd>
            </h2>
            <h2
              style={{
                fontSize: "1rem",
                display: "inline",
                marginRight: "1em"
              }}
            >
              <strong>Results:</strong> <kbd>Loading...</kbd>
            </h2>
          </div>
          <div style={{ display: "inline", marginRight: "1em" }}>
            <strong>Sort By:</strong>&nbsp;
            <select onChange={e => this.changeSortBy(e)}>
              <option value="publishedAt">Date Published</option>
              <option value="relevancy">Relevency</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
          <div style={{ display: "inline", marginRight: "1em" }}>
            <strong>Results per Page:</strong>&nbsp;
            <select onChange={e => this.changePageSize(e)}>
              <option value="100">100</option>
              <option value="50" disabled>
                50
              </option>
              <option value="25" disabled>
                25
              </option>
            </select>
          </div> */}
        </div>
      </a>
    );
  }
}

export default Header;
