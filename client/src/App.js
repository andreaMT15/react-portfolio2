import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Thanks from "./pages/ThankYou";
import Home from "../src/pages/Home";

import "./Portfolio.css";

// When using const like this, uppercase underscore the var: INITIAL_STATE
// Use single quotes in javascript, double quotes for html/JSX
class App extends Component {
  render() {
    return (
      <Router>
        {/* Unstyled divs like this are unnecessary and clutter the structure. */}
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/thank-you" component={Thanks} />
        </div>
      </Router>
    );
  }
}

export default App;
