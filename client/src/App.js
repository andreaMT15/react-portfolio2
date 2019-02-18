import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Thanks from "./pages/ThankYou";
import Home from "../src/pages/Home";
import MainNav from "./components/MainNav";
import "./Portfolio.css";

const AppRouter = () => (
  <Router>
    <div>
      <MainNav />
      <Route path="/" exact component={Home} />
      <Route path="/thank-you" component={Thanks} />
    </div>
  </Router>
);

export default AppRouter;
