import React from "react";
import { Row, Col, Jumbotron, Button } from "react-bootstrap";
import Background from "../Images/sergey-zolkin-192937-unsplash.jpg";
import Portfolio from "./Portfolio";
import Headshot from "../Images/Andrea_2017v2.jpg";
import ContactForm from "./Contact";
import ScrollableAnchor from "react-scrollable-anchor";
import "../Portfolio.css";
import MainNav from "../components/MainNav";

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

// This component does not require state, nor does it use
// the lifecycle hooks. Do not use a class here, make it a
// dumb component.
//
// Don't use inline styles
class Home extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <div style={style.background}>
          <Jumbotron id={"home"} style={style.intro}>
            <Row>
              <Col sm={1} md={4} lg={4}>
                <img id="headshot-img" src={Headshot} alt="headshot" style={style.headshot} />
              </Col>
              <Col sm={1} md={8} lg={8}>
                {/* 
                  h5 is an incorrect usage of heading tags. This is not a heading, this is a paragraph.
                */}
                <h5 id={"intro-text"} style={{ marginBottom: "15px", color: "black" }}>
                  Hi, I'm Andrea Minhas, a full-stack developer with a background in social media marketing. I focus on
                  creating high-functioning, user-centric web-applications in HTML, React.js, CSS, Javascript, and
                  Node.js. My past experience in social media marketing allows me to leverage my strategic planning,
                  team collaboration, and creativity skills. In my previous positions, I learned to adapt to new tools
                  and technology quickly and work in a fast-paced environment.
                </h5>
                <a href="#portfolio">
                  {/* 
                    A button in an anchor tag is invalid HTML and doesn't follow semantics. Anchor tags are links that take you
                    somewhere, buttons indicate interaction that isn't a link.
                  */}
                  <Button style={style.introBtn}>See My Work</Button>
                </a>
              </Col>
            </Row>
          </Jumbotron>
        </div>
        <div>
          <ScrollableAnchor id={"portfolio"}>
            <Portfolio />
          </ScrollableAnchor>
        </div>
        <div>
          <ScrollableAnchor id={"contact"}>
            <ContactForm />
          </ScrollableAnchor>
        </div>
      </div>
    );
  }
}
export default Home;
