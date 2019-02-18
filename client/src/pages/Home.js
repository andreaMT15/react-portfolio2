import React from "react";
import { Row, Col, Jumbotron, Button } from "react-bootstrap";
import Background from "../Images/sergey-zolkin-192937-unsplash.jpg";
import ScrollableAnchor from "react-scrollable-anchor";
import Portfolio from "./Portfolio";
import Headshot from "../Images/headshot.jpg";
import Skills from "./Skills";
import Contact from "./Contact";

const style = {
  background: {
    width: "100%",
    height: "900px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    opacity: ".9"
  },
  intro: {
    backgroundColor: "#FF746A",
    opacity: ".95",
    textAlign: "center",
    position: "relative",
    top: "180px",
    width: "53%",
    height: "350px",
    left: "25%",
    color: "white",
    fontWeight: "700",
    fontFamily: "Raleway"
  },
  introBtn: {
    backgroundColor: "black",
    color: "white",
    borderColor: "black",
    height: "2.5rem",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "1.2rem"
  },
  headshot: {
    borderRadius: "80%",
    display: "inline-block"
  }
};

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <div style={style.background}>
          <Jumbotron style={style.intro}>
            <Row>
              <Col md={4}>
                <img src={Headshot} alt="headshot" style={style.headshot} />
              </Col>
              <Col md={8}>
                <h5 style={{ marginBottom: "15px" }}>
                  Hi, I'm Andrea Minhas, a full-stack web developer with a
                  background in digital marketing. I enjoy helping brands build
                  an online presence by creating high-functioning, creative,
                  user centric, web-applications and leveraging my background in
                  digital marketing to provide a unique perspective on how the
                  end-user interacts with a website.{" "}
                </h5>
                <a href="#skills">
                  <Button style={style.introBtn}> See My Work </Button>
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
