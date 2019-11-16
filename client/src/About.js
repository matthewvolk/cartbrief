import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import "./About.css";

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <Navigation />
        <div
          className="text-center"
          style={{ maxWidth: "720px", margin: "0 auto" }}
        >
          <p>
            CartBrief is an application designed to aggregate news articles from
            over 30,000 news sources that contain the keyword "e-commerce".
          </p>
          <p>Neato, right? 😎</p>
          <br />
          <div>
            <a
              href="http://twitter.com/mattjvolk"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1"
            >
              Twitter
            </a>
            <a
              href="http://github.com/matthewvolk"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1"
            >
              GitHub
            </a>
            <a
              href="http://linkedin.com/in/mjvolk"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default About;
