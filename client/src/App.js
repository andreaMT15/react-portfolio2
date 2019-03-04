import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Thanks from "./pages/ThankYou";
import Home from "../src/pages/Home";

import "./Portfolio.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/thank-you" component={Thanks} />
        </div>
      </Router>
    );
  }
}

export default App;
