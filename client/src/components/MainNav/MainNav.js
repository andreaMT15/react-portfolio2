import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css';

const MainNav = () => {
  return (
    <div className="nav">
      {/* <Navbar fixed="top" className="nav" collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link style={{ color: 'white' }} href="/">
              Home
            </Nav.Link>

            <Nav.Link href="/portfolio">Portfolio</Nav.Link>

            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
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
