import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Headshot from "../Images/headshot.jpg";

const style = {
  jumbotron: {
    position: "relative",
    top: "100px",
    background: "none"
  },
  info: {
    marginTop: "15px",
    fontSize: "1.5rem"
  },
  headshot: {
    borderRadius: "80%"
  },
  list: {
    display: "inline-block",
    fontSize: "1.5rem",
    textAlign: "center"
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
        <Container style={style.jumbotron}>
          <Row>
            <Col md={3} lg={3}>
              <img src={Headshot} alt="headshot" style={style.headshot} />
            </Col>
            <Col md={9} lg={9}>
              <div style={{ marginLeft: "15px" }}>
                <p style={style.info}>
                  I am a Full-Stack Web Developer with a background in digital
                  marketing. I enjoy helping brands build an online presence by
                  creating high-functioning, creative, user centric,
                  web-applications and leveraging my background in digital
                  marketing to provide a unique perspective on how the end-user
                  interacts with a website.
                </p>
              </div>
            </Col>
          </Row>

          <Row style={{ marginTop: "1rem" }}>
            <Col md={12} lg={12}>
              <h1 style={{ textAlign: "center" }}>Skills</h1>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={12} lg={12} style={style.listRow}>
              <p style={style.list}>React.js</p>
              <p style={style.list}>HTML 5</p>
              <p style={style.list}>CSS 3</p>
              <p style={style.list}>Javascript</p>
              <p style={style.list}>Node.JS</p>
              <p style={style.list}>MySQL/MongoDB</p>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12} className="skills">
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
