import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

class Newsletter extends Component {
  render() {
    return (
      <>
        <Header />
        <Navigation />
        <div
          style={{ maxWidth: "720px", margin: "0 auto" }}
          className="text-center"
        >
          <h3 style={{ fontWeight: 700 }}>Newsletter Coming Soon!</h3>
          <p>
            Get the top e-commerce articles and their summaries, delivered daily
            to your inbox.
          </p>
        </div>
      </>
    );
  }
}

export default Newsletter;
