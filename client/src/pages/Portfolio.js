import React from "react";
import Col from "react-bootstrap/Col";
import CrystalCollector from "../Images/crystal-collector.png";
import ChicagoTrivia from "../Images/The Chicago Trivia Quiz.png";
import Movies from "../Images/movie gifs.png";
import TrainSchedule from "../Images/Train-Schedule.png";
import LiriBot from "../Images/Liri-Bot.png";
import Bamazon from "../Images/Bamazon.png";
import Psychic from "../Images/Word-Guess-Game.png";
import ChicagoCrime from "../Images/crime.png";
import Unearth from "../Images/unearth.png";
import News from "../Images/scraper.png";
import POS from "../Images/POS.png";
import Image from "../components/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Portfolio.css";

//images
let images = [
  {
    row: "row1",
    url: "https://unearth.business/",
    path: Unearth,
    name: "Unearth",
    textLine1:
      "A front end application designed to allow users to find hiking trails nearby with a zip code search."
  },
  {
    row: "row1",
    url: "https://glacial-beach-88138.herokuapp.com",
    path: ChicagoCrime,
    name: "Chicago-Crime-Data",
    textLine1:
      "A full-stack application designed to quantitavely display crime trends for the city of Chicago."
  },
  {
    row: "row1",
    url: "https://radiant-beyond-45567.herokuapp.com/",
    path: POS,
    name: "Restaurant-POS-System",
    textLine1:
      "A full-stack application designed to be a restaurant POS system for the front of house staff."
  },
  {
    row: "row2",
    url: "https://andreamt15.github.io/psychic-game/",
    path: Psychic,
    name: "Word-Guess-Game",
    textLine1:
      "A front end application desinged to generate a random letter for the user to guess."
  },
  {
    row: "row2",
    url: "https://andreamt15.github.io/unit-4-game/",
    path: CrystalCollector,
    name: "Crystal-Collector",
    textLine1:
      "A front end application designed as a guessing game in which the user is to try to guess the values of the crystals and try to reach the correct total score."
  },
  {
    row: "row2",
    url: "https://andreamt15.github.io/TriviaGame/",
    path: ChicagoTrivia,
    name: "Chicago-Trivia-Quiz",
    textLine1: "Front End Application",
    textLine2: "HTML, CSS, JQuery"
  },
  {
    row: "row3",
    url: "https://andreamt15.github.io/GifTastic/",
    path: Movies,
    name: "Movie-GIF's",
    textLine1: "Front End Application",
    textLine2: "HTML, CSS, JQuery, AJAX"
  },
  {
    row: "row3",
    url: "https://andreamt15.github.io/Train-Schedule/",
    path: TrainSchedule,
    name: "Train-Schedule",
    textLine1: "Front End Application",
    textLine2: "HTML, CSS, JQuery, Firebase"
  },
  {
    row: "row3",
    url: "https://github.com/andreaMT15/LIRI-Node-App",
    path: LiriBot,
    name: "Liri-Bot",
    textLine1: "Back End Application",
    textLine2: "JQuery, Node.js"
  },
  {
    row: "row4",
    url: "https://github.com/andreaMT15/bamazon",
    path: Bamazon,
    name: "Bamazon",
    textLine1: "Back End Application",
    textLine2: "JQuery, Node.js, MySQL"
  },
  {
    row: "row4",
    url: "https://blooming-refuge-11896.herokuapp.com/",
    path: News,
    name: "News-Scraper",
    textLine1: "Full-Stack Application",
    textLine2: "HTML, CSS, JQuery, Node.js, MongoDB"
  }
];

class PortfolioSection extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <Container>
          <Row>
            {images
              .filter(image => image.row === "row1")
              .map(image => {
                return (
                  <Col sm={1} md={4} lg={4} xl={4} className="test">
                    <a href={image.url}>
                      <Image src={image.path} alt={image.name} />
                      <div className="overlay">
                        <div className="text">{image.textLine1}</div>
                      </div>
                    </a>
                  </Col>
                );
              })}
          </Row>
          <Row>
            {images
              .filter(image => image.row === "row2")
              .map(image => {
                return (
                  <Col sm={1} md={4} lg={4} xl={4} className="test">
                    <a href={image.url}>
                      <Image src={image.path} alt={image.name} />
                      <div className="overlay">
                        <div className="text">
                          {image.textLine1}
                          {image.textLine2}
                        </div>
                      </div>
                    </a>
                  </Col>
                );
              })}
          </Row>
          <Row>
            {images
              .filter(image => image.row === "row3")
              .map(image => {
                return (
                  <Col sm={1} md={4} lg={4} xl={4} className="test">
                    <a href={image.url}>
                      <Image src={image.path} alt={image.name} />
                      <div className="overlay">
                        <div className="text">
                          <h3>{image.textLine1}</h3>
                          {image.textLine2}
                        </div>
                      </div>
                    </a>
                  </Col>
                );
              })}
          </Row>
          <Row>
            {images
              .filter(image => image.row === "row4")
              .map(image => {
                return (
                  <Col sm={1} md={4} lg={4} xl={4} className="test">
                    <a href={image.url}>
                      <Image src={image.path} alt={image.name} />
                      <div className="overlay">
                        <div className="text">
                          <h3>{image.textLine1}</h3>
                          {image.textLine2}
                        </div>
                      </div>
                    </a>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default PortfolioSection;
