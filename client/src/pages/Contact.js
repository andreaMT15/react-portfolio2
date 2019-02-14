import React from "react";
import { Container, Button, Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const style = {
  text: {
    fontSize: "1.2rem",
    marginTop: "1.5rem",
    lineHeight: "2rem"
  }
};

//this is the contact form
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      message: "",
      mailSent: false,
      error: null
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    document.getElementById("contact").reset();

    const info = {
      firstName: this.state.fname,
      lastName: this.state.lname,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    };

    axios.post("api/form", info);
  };

  //Contact Form
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={10}>
              <p style={style.text}>
                Have a project you would like to discuss? <br />
                Connect with me on{" "}
                <a href="https://www.linkedin.com/in/andreaminhas/">
                  LinkedIn
                </a>{" "}
                or fill out the form below with your contact information and
                details about your project.
              </p>
            </Col>
          </Row>
          <Form id="contact" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Row>
                <Col md={4}>
                  <Form.Control
                    placeholder="First Name"
                    type="text"
                    name="fname"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    placeholder="Last Name"
                    type="text"
                    name="lname"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col md={8}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col md={8}>
                  <Form.Control
                    type="number"
                    name="phone"
                    placeholder="123456789"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col md={8}>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Message"
                    name="message"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Link to={`/thank-you`}>
              <Button
                style={{ backgroundColor: "#003366" }}
                onClick={e => this.handleSubmit(e)}
                value="Submit"
                type="submit"
              >
                Submit
              </Button>
            </Link>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ContactForm;
