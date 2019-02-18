import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import ContactForm from "./pages/Contact";
import Thanks from "./pages/ThankYou";
import Home from "../src/pages/Home";
// import MainNav from "./components/MainNav";
import About from "./pages/Skills";
import "./Portfolio.css";

const AppRouter = () => (
  <Router>
    <div>
      {/* <MainNav /> */}
      <Route path="/" exact component={Home} />
      {/* <Route path="/about-me" component={About} /> */}
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={ContactForm} />
      <Route path="/thank-you" component={Thanks} />
    </div>
  </Router>
);

export default AppRouter;
