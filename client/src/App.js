import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Newsletter from "./Newsletter";
import createHistory from "history/createBrowserHistory";
import ReactGA from "react-ga";

const history = createHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class App extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/newsletter" component={Newsletter} />
      </Router>
    );
  }
}

export default App;
