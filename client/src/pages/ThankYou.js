import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Thanks = () => {
  return (
    <Container>
      <Row>
        <Col
          md={12}
          sm={6}
          style={{
            textAlign: 'center',
            marginTop: '20%'
          }}
        >
          <h3>
            Thank you for contacting me.
            <br /> I will respond to your request within 24-48 hrs.
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Thanks;
