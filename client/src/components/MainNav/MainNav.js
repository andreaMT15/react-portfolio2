import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css';

const MainNav = () => {
  return (
    <div className="nav">
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default MainNav;
