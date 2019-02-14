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
import GithubImg from "../components/Github";

let images = [
  {
    key: 1,
    row: "row1",
    url: "https://unearth.business/",
    path: Unearth,
    name: "Unearth",
    textLine1:
      "A front end application designed to allow users to find hiking trails nearby with a zip code search.",
    repoUrl: "https://github.com/unearth-business/unearth-business.github.io"
  },
  {
    key: 2,
    row: "row1",
    url: "https://glacial-beach-88138.herokuapp.com",
    path: ChicagoCrime,
    name: "Chicago-Crime-Data",
    textLine1:
      "A full-stack application designed to quantitavely display crime trends for the city of Chicago.",
    repoUrl: "https://github.com/andreaMT15/Project-2.1"
  },
  {
    key: 3,
    row: "row1",
    url: "https://radiant-beyond-45567.herokuapp.com/",
    path: POS,
    name: "Restaurant-POS-System",
    textLine1:
      "A full-stack application designed to be a restaurant POS system for the front of house staff.",
    repoUrl: "https://github.com/shayneofficer/POS-System"
  },
  {
    key: 4,
    row: "row2",
    url: "https://andreamt15.github.io/psychic-game/",
    path: Psychic,
    name: "Word-Guess-Game",
    textLine1:
      "A front end application desinged to generate a random letter for the user to guess.",
    repoUrl: "https://github.com/andreaMT15/psychic-game"
  },
  {
    key: 5,
    row: "row2",
    url: "https://andreamt15.github.io/unit-4-game/",
    path: CrystalCollector,
    name: "Crystal-Collector",
    textLine1:
      "A front end application designed to have the user attempt to guess the total score by guesssing the values of the crystals.",
    repoUrl: "https://github.com/andreaMT15/unit-4-game"
  },
  {
    key: 6,
    row: "row2",
    url: "https://andreamt15.github.io/TriviaGame/",
    path: ChicagoTrivia,
    name: "Chicago-Trivia-Quiz",
    textLine1: "A front end application designed as a timed trivia quiz.",
    repoUrl: "https://github.com/andreaMT15/TriviaGame"
  },
  {
    key: 7,
    row: "row3",
    url: "https://andreamt15.github.io/GifTastic/",
    path: Movies,
    name: "Movie-GIF's",
    textLine1:
      "A front end application that utilizes the giphy API in order to display movie GIF's.",
    repoUrl: "https://github.com/andreaMT15/GifTastic"
  },
  {
    key: 8,
    row: "row3",
    url: "https://andreamt15.github.io/Train-Schedule/",
    path: TrainSchedule,
    name: "Train-Schedule",
    textLine1:
      "An application that is created to display a train schedule that is stored in firebase and take in user input.",
    repoUrl: "https://github.com/andreaMT15/Train-Schedule"
  },
  {
    key: 9,
    row: "row3",
    url: "https://github.com/andreaMT15/LIRI-Node-App",
    path: LiriBot,
    name: "Liri-Bot",
    textLine1:
      "A command line application that utilizes Node.js to create a bot that takes in commands similar to Siri.",
    repoUrl: "https://github.com/andreaMT15/LIRI-Node-App"
  },
  {
    key: 10,
    row: "row4",
    url: "https://github.com/andreaMT15/bamazon",
    path: Bamazon,
    name: "Bamazon",
    textLine1:
      "A command line application that utlizes Node.js and MySQL to create an amazon like store in the terminal.",
    repoUrl: "https://github.com/andreaMT15/bamazon"
  },
  {
    key: 11,
    row: "row4",
    url: "https://blooming-refuge-11896.herokuapp.com/",
    path: News,
    name: "News-Scraper",
    textLine1:
      "A full-stack application designed to scrape the NYT Poltics politics page and store the articles in MongoDB.",
    repoUrl: "https://github.com/andreaMT15/NYT-Scraper"
  }
];

class PortfolioSection extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row style={{ marginTop: "1.5rem" }}>
            {images
              .filter(image => image.row === "row1")
              .map(image => {
                return (
                  <Col
                    key={image.key}
                    sm={1}
                    md={4}
                    lg={4}
                    xl={4}
                    className="test"
                  >
                    <a href={image.url}>
                      <Image src={image.path} alt={image.name} />
                      <div className="overlay">
                        <div className="text">{image.textLine1}</div>
                      </div>
                    </a>
                    <div>
                      <a href={image.repoUrl}>
                        <GithubImg />
                      </a>
                    </div>
                  </Col>
                );
              })}
          </Row>
          <Row>
            {images
              .filter(image => image.row === "row2")
              .map(image => {
                return (
                  <Col
                    key={image.key}
                    sm={1}
                    md={4}
                    lg={4}
                    xl={4}
                    className="test"
                  >
                    <a href={image.url}>
                      <Image
                        key={image.key}
                        src={image.path}
                        alt={image.name}
                      />
                      <div className="overlay">
                        <div className="text">{image.textLine1}</div>
                      </div>
                    </a>
                    <div>
                      <a href={image.repoUrl}>
                        <GithubImg />
                      </a>
                    </div>
                  </Col>
                );
              })}
          </Row>
          <Row>
            {images
              .filter(image => image.row === "row3")
              .map(image => {
                return (
                  <Col
                    key={image.key}
                    sm={1}
                    md={4}
                    lg={4}
                    xl={4}
                    className="test"
                  >
                    <a href={image.url}>
                      <Image
                        key={image.key}
                        src={image.path}
                        alt={image.name}
                      />
                      <div className="overlay">
                        <div className="text">{image.textLine1}</div>
                      </div>
                    </a>
                    <div>
                      <a href={image.repoUrl}>
                        <GithubImg />
                      </a>
                    </div>
                  </Col>
                );
              })}
          </Row>
          <Row>
            {images
              .filter(image => image.row === "row4")
              .map(image => {
                return (
                  <Col
                    key={image.key}
                    sm={1}
                    md={4}
                    lg={4}
                    xl={4}
                    className="test"
                  >
                    <a href={image.url}>
                      <Image
                        key={image.key}
                        src={image.path}
                        alt={image.name}
                      />
                      <div className="overlay">
                        <div className="text">{image.textLine1}</div>
                      </div>
                    </a>
                    <div style={{ marginBottom: "1.5rem" }}>
                      <a href={image.repoUrl}>
                        <GithubImg />
                      </a>
                    </div>
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
