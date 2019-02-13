import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import ContactForm from "./pages/Contact";

import Home from "../src/pages/Home";
import MainNav from "./components/MainNav";

const AppRouter = () => (
  <Router>
    <div>
      <MainNav />
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={ContactForm} />
    </div>
  </Router>
);

export default AppRouter;
