import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

//this is the navbar
class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" style={{ backgroundColor: '#8778d2' }} collapseOnSelect expand="lg">
          <Navbar.Brand style={{ color: 'white' }} href="#home" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />

            <Nav>
              <Nav.Link style={{ color: 'white' }} href="/">
                Home
              </Nav.Link>

              <Nav.Link style={{ color: 'white' }} href="/portfolio">
                Portfolio
              </Nav.Link>

              <Nav.Link style={{ color: 'white' }} href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav;
