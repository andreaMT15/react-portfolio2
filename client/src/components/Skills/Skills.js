import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={6} md={12} lg={12}>
            <h1 id="title">Skills</h1>
          </Col>
        </Row>
        <br />
        <Row className="skill-row">
          <Col sm={6} md={12} lg={12}>
            <ul className="skill-list">
              <li>React.js</li>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>Javascript</li>
              <li>Node.JS</li>
              <li>MySQL/MongoDB</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={12} lg={12} className="skill-icons">
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
};

export default Skills;
