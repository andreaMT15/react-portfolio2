import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Thanks from "./pages/ThankYou";
import Home from "../src/pages/Home";
import MainNav from "./components/MainNav";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./Portfolio.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainNav />
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/thank-you" component={Thanks} />
        </div>
      </Router>
    );
  }
}

export default App;
