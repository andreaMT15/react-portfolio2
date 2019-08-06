import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Thanks from './pages/ThankYou';
import MainNav from './components/MainNav/MainNav';
import './App.css';

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
