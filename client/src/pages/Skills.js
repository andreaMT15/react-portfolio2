import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const style = {
  title: {
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
    marginTop: "5rem",
    color: "#1a73ba"
  },
  list: {
    display: "inline-block",
    fontSize: "1.3rem",
    textAlign: "center",
    color: "black"
  },
  listRow: {
    display: "flex",
    justifyContent: "space-evenly",
    marginLeft: "52px"
  }
};

class About extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={6} md={12} lg={12}>
              <h1 style={style.title}>Skills</h1>
            </Col>
          </Row>
          <br />
          <Row id={"skill-list"}>
            <Col sm={6} md={12} lg={12} style={style.listRow}>
              <p style={style.list}>React.js</p>
              <p style={style.list}>HTML 5</p>
              <p style={style.list}>CSS 3</p>
              <p style={style.list}>Javascript</p>
              <p style={style.list}>Node.JS</p>
              <p style={style.list}>MySQL/MongoDB</p>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={12} lg={12} className="skills">
              <i className="fab fa-react" />
              <i className="fab fa-html5" />
              <i className="fab fa-css3-alt" />
              <i className="fab fa-js-square" />
              <i className="fab fa-node" />
              <i className="fas fa-database" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
