import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import axios from "axios";

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

  async handleSubmit(e) {
    e.preventdefault();

    const { fname, lname, email, phone, message } = this.state;

    const form = await axios.post("/api/form");
  }

  //Contact Form
  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.handleSubmit} style={{ marginTop: "50px" }}>
            <Form.Group>
              <Form.Row>
                <Col md={4}>
                  <Form.Control
                    placeholder="First Name"
                    type="text"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    placeholder="Last Name"
                    type="text"
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
                    onChange={e => this.setState({ message: e.target.value })}
                    value={this.state.message}
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Submit"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ContactForm;
