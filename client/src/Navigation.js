import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <nav className="text-center mt-2 mb-4">
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/newsletter">Newsletter</a>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}

export default Navigation;
