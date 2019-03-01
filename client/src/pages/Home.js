import React from "react";
import { Row, Col, Jumbotron, Button } from "react-bootstrap";
import Background from "../Images/sergey-zolkin-192937-unsplash.jpg";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
import { goToTop } from "react-scrollable-anchor";
import Portfolio from "./Portfolio";
import Headshot from "../Images/Andrea_2017v2.jpg";
import Skills from "./Skills";
import Contact from "./Contact";
import "../Portfolio.css";

const style = {
  background: {
    width: "100%",
    minHeight: "900px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    opacity: ".9"
  },
  intro: {
    backgroundColor: "#FFFFFF",
    opacity: ".95",
    textAlign: "center",
    position: "relative",
    top: "180px",
    left: "20%",
    maxWidth: "65%",
    color: "white",
    fontWeight: "700",
    fontFamily: "Raleway"
  },
  introBtn: {
    backgroundColor: "black",
    color: "white",
    borderColor: "black",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "1.2rem"
  },
  headshot: {
    borderRadius: "80%",
    display: "inline-block",
    marginBottom: "10px"
  }
};

class Home extends React.Component {
  render() {
    configureAnchors({ offset: "60px", scrollDuration: 200 });
    goToTop(Contact);
    return (
      <div>
        <div style={style.background}>
          <Jumbotron id={"home"} style={style.intro}>
            <Row>
              <Col sm={1} md={4} lg={4}>
                <img id="headshot-img" src={Headshot} alt="headshot" style={style.headshot} />
              </Col>
              <Col sm={1} md={8} lg={8}>
                <h5 id={"intro-text"} style={{ marginBottom: "15px", color: "black" }}>
                  Hi, I'm Andrea Minhas, a Northwestern University certified full-stack web developer with a background
                  in social media marketing. I focus on creating high-functioning, user-centric web-applications in
                  HTML, React.js, CSS, Javascript, and Node.js. My past experience in social media marketing allows me
                  to leverage my strategic planning, team collaboration, and creativity skills. In my previous
                  positions, I learned to adapt to new tools and technology quickly and work in a fast-paced
                  environment. I value the benefits of both team based and independent work and enjoy working on both
                  front-end and back-end development.
                </h5>
                <a href="#skills">
                  <Button style={style.introBtn}>See My Work</Button>
                </a>
              </Col>
            </Row>
          </Jumbotron>
        </div>
        <div>
          <ScrollableAnchor id={"skills"}>
            <Skills />
          </ScrollableAnchor>
        </div>
        <div>
          <Portfolio />
        </div>
        <div>
          <ScrollableAnchor id={"contact"}>
            <Contact />
          </ScrollableAnchor>
        </div>
      </div>
    );
  }
}

export default Home;
