import React from "react";
import { Container, Button, Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

const style = {
  page: {
    marginTop: "8rem"
  },
  text: {
    fontSize: "1.2rem"
    // marginTop: "2rem"
  }
};

const initialState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  message: "",
  fnameError: "",
  lnameError: "",
  emailError: ""
};

//this is the contact form
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.fname.length === 0) {
      this.setState({
        fnameError: "Please enter your first name."
      });
    } else if (this.state.lname.length === 0) {
      this.setState({
        lnameError: "Please enter your last name"
      });
    } else if (!this.state.email.includes("@")) {
      this.setState({
        emailError: "Please enter a valid email address"
      });
    } else {
      const info = {
        firstName: this.state.fname,
        lastName: this.state.lname,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      };

      let self = this;
      axios.post("api/form", info).then(function(data) {
        console.log(data);
        self.props.history.push("/thank-you");
      });
    }
  };
  // }

  //Contact Form
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={10} style={style.page}>
              <p style={style.text}>
                <h4>Interested in working together?</h4>
                Connect with me on <a href="https://www.linkedin.com/in/andreaminhas/">LinkedIn</a> or fill out the form
                below with your contact information to get in touch.
              </p>
            </Col>
          </Row>
          <Form id="contact" onSubmit={this.handleSubmit} style={{ marginBottom: "12rem" }}>
            <Form.Group>
              <Form.Row>
                <Col md={4}>
                  <Form.Control placeholder="First Name" type="text" name="fname" onChange={this.handleChange} />
                  <div style={{ marginLeft: "5px", marginTop: "2px" }}>{this.state.fnameError}</div>
                </Col>
                <Col md={4}>
                  <Form.Control placeholder="Last Name" type="text" name="lname" onChange={this.handleChange} />
                  <div>{this.state.lnameError} </div>
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col md={8}>
                  <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                  <div>{this.state.emailError}</div>
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col md={8}>
                  <Form.Control type="test" name="phone" placeholder="(708) 123-456" onChange={this.handleChange} />
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

            <Button
              style={{ backgroundColor: "#003366" }}
              onClick={e => this.handleSubmit(e)}
              value="Submit"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(ContactForm);
