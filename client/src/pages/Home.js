import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Background from "../Images/sergey-zolkin-192937-unsplash.jpg";

const style = {
  background: {
    width: "100%",
    height: "1080px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center"
  },
  intro: {
    width: "50%",
    backgroundColor: "whitesmoke",
    opacity: "0.93",
    textAlign: "center",
    position: "relative",
    top: "230px",
    left: "25%"
  },
  introBtn: {
    backgroundColor: "black",
    color: "white",
    borderColor: "black",
    height: "3rem",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "1.2rem"
  }
};
class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div style={style.background}>
        <Jumbotron style={style.intro}>
          <div style={{ marginTop: "10px" }}>
            <h2>Hello, I'm Andrea Minhas.</h2>
            <h2>I'm a full-stack web developer.</h2>
            <br />
          </div>
          <Link to="/portfolio">
            <Button style={style.introBtn}> See My Work </Button>
          </Link>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
