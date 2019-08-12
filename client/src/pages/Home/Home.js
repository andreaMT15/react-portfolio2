import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import Headshot from '../../Images/Andrea_2017v2.jpg';
import './Home.css';

const Home = () => {
  return (
    <div id="home-background">
      <Jumbotron className="jumbotron" id="home">
        <Row>
          <Col sm={1} md={4} lg={4} className="headshot-container">
            <img id="headshot" src={Headshot} alt="headshot" />
          </Col>
          <Col sm={1} md={8} lg={8}>
            <h5 id="intro-text">
              Hi, I'm Andrea Minhas, a full-stack developer with a background in social media marketing. I focus on
              creating high-functioning, user-centric web-applications in HTML, React.js, CSS, Javascript, and Node.js.
              My past experience in social media marketing allows me to leverage my strategic planning, team
              collaboration, and creativity skills. In my previous positions, I learned to adapt to new tools and
              technology quickly and work in a fast-paced environment.
            </h5>
            <div id="btn-row">
              <Link to={'/portfolio'}>
                <Button id="portfolio-btn">See My Work</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Home;
