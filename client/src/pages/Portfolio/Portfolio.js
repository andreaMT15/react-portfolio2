import React from 'react';
import Col from 'react-bootstrap/Col';
import CrystalCollector from '../../Images/crystal-collector.png';
import ChicagoTrivia from '../../Images/The Chicago Trivia Quiz.png';
import Movies from '../../Images/movie gifs.png';
import TrainSchedule from '../../Images/Train-Schedule.png';
import LiriBot from '../../Images/Liri-Bot.png';
import Bamazon from '../../Images/Bamazon.png';
import Unearth from '../../Images/unearth.png';
import News from '../../Images/scraper.png';
import POS from '../../Images/POS.png';
import Books from '../../Images/Books.png';
import Driver from '../../Images/Driver.png';
import Image from '../../components/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GithubImg from '../../components/Github';
import Skills from '../../components/Skills/Skills';
import './Portfolio.css';

let images = [
  {
    row: 'row1',
    url: 'https://still-lake-59836.herokuapp.com/',
    path: Books,
    name: 'Book Search',
    textLine1: 'A react-app designed to query the Google Books API and display search results.',
    repoUrl: 'https://github.com/andreaMT15/Google-Books-Challenge'
  },
  {
    row: 'row1',
    url: 'https://github.com/andreaMT15/delivery-driver',
    path: Driver,
    name: 'Delivery Driver Kata',
    textLine1: 'A react-app designed to calculate how much money a delivery driver would make in a day.',
    repoUrl: 'https://github.com/andreaMT15/delivery-driver'
  },
  {
    row: 'row1',
    url: 'https://unearth.business/',
    path: Unearth,
    name: 'Unearth',
    textLine1: 'A front end application designed to allow users to find hiking trails nearby with a zip code search.',
    repoUrl: 'https://github.com/unearth-business/unearth-business.github.io'
  },
  {
    row: 'row2',
    url: 'https://radiant-beyond-45567.herokuapp.com/',
    path: POS,
    name: 'Restaurant-POS-System',
    textLine1: 'A full-stack application designed to be a restaurant POS system for the front of house staff.',
    repoUrl: 'https://github.com/shayneofficer/POS-System'
  },
  {
    row: 'row2',
    url: 'https://blooming-refuge-11896.herokuapp.com/',
    path: News,
    name: 'News-Scraper',
    textLine1:
      'A full-stack application designed to scrape the NYT Poltics politics page and store the articles in MongoDB.',
    repoUrl: 'https://github.com/andreaMT15/NYT-Scraper'
  },
  {
    row: 'row2',
    url: 'https://andreamt15.github.io/Crystal-Collector-Game/',
    path: CrystalCollector,
    name: 'Crystal-Collector',
    textLine1:
      'A front end application designed to have the user attempt to guess the total score by guesssing the values of the crystals.',
    repoUrl: 'https://github.com/andreaMT15/Crystal-Collector-Game'
  },
  {
    row: 'row3',
    url: 'https://andreamt15.github.io/Chicago-Trivia-Game/',
    path: ChicagoTrivia,
    name: 'Chicago-Trivia-Quiz',
    textLine1: 'A front end application designed as a timed trivia quiz.',
    repoUrl: 'https://github.com/andreaMT15/Chicago-Trivia-Game'
  },
  {
    row: 'row3',
    url: 'https://andreamt15.github.io/GifTastic/',
    path: Movies,
    name: "Movie-GIF's",
    textLine1: "A front end application that utilizes the giphy API in order to display movie GIF's.",
    repoUrl: 'https://github.com/andreaMT15/GifTastic'
  },
  {
    row: 'row3',
    url: 'https://andreamt15.github.io/Train-Schedule/',
    path: TrainSchedule,
    name: 'Train-Schedule',
    textLine1:
      'An application that is created to display a train schedule that is stored in firebase and take in user input.',
    repoUrl: 'https://github.com/andreaMT15/Train-Schedule'
  },
  {
    row: 'row4',
    url: 'https://github.com/andreaMT15/LIRI-Node-App',
    path: LiriBot,
    name: 'Liri-Bot',
    textLine1:
      'A command line application that utilizes Node.js to create a bot that takes in commands similar to Siri.',
    repoUrl: 'https://github.com/andreaMT15/LIRI-Node-App'
  },
  {
    row: 'row4',
    url: 'https://github.com/andreaMT15/bamazon',
    path: Bamazon,
    name: 'Bamazon',
    textLine1:
      'A command line application that utlizes Node.js and MySQL to create an amazon like store in the terminal.',
    repoUrl: 'https://github.com/andreaMT15/bamazon'
  }
];

const PortfolioSection = () => {
  return (
    <div>
      <Skills />
      <Container>
        <h1 id="title">Projects</h1>
        <Row className="projects">
          {images
            .filter(image => image.row === 'row1')
            .map((image, index) => {
              return (
                <Col key={index} sm={1} md={4} lg={4} xl={4} className="test" style={{ display: 'inline-block' }}>
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
        <Row className="projects">
          {images
            .filter(image => image.row === 'row2')
            .map(image => {
              return (
                <Col key={image.key} sm={1} md={4} lg={4} xl={4} className="test">
                  <a href={image.url}>
                    <Image key={image.key} src={image.path} alt={image.name} />
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
        <Row className="projects">
          {images
            .filter(image => image.row === 'row3')
            .map(image => {
              return (
                <Col key={image.key} sm={1} md={4} lg={4} xl={4} className="test">
                  <a href={image.url}>
                    <Image key={image.key} src={image.path} alt={image.name} />
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
        <Row className="projects">
          {images
            .filter(image => image.row === 'row4')
            .map((image, index) => {
              return (
                <Col key={index} sm={1} md={4} lg={4} xl={4} className="test" style={{ display: 'inline-block' }}>
                  <a href={image.url}>
                    <Image src={image.path} alt={image.name} />
                    <div className="overlay">
                      <div className="text">{image.textLine1}</div>
                    </div>
                  </a>
                  <div style={{ marginBottom: '15rem' }}>
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
};

export default PortfolioSection;
