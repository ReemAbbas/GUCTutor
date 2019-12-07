import React, { Component } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import validator from "../validations/validations";

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class register extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isLoading: false,
      inputList: [],
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      phoneNumber: "",
      GUCID: "",
      gender: "",
      location: ""
    };
  }

  updateFirstName(evt) {
    this.setState({
      firstName: evt.target.value
    });
  }
  updateLastName(evt) {
    this.setState({
      lastName: evt.target.value
    });
  }
  updatePassword(evt) {
    this.setState({
      password: evt.target.value
    });
  }
  updateEmail(evt) {
    this.setState({
      email: evt.target.value
    });
  }
  updatePhoneNumber(evt) {
    this.setState({
      phoneNumber: evt.target.value
    });
  }
  updateGUCID(evt) {
    this.setState({
      GUCID: evt.target.value
    });
  }
 
  handleClick() {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false });
      });
    });
  }

  async handleSubmit(event) {
    const info = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      GUCID: this.state.GUCID,
      gender: this.state.gender,
      location: this.state.location
    };
    const isValidated = validator.createAccountValidation(info);
    if (isValidated.error) alert(isValidated.error.details[0].message);
    else
      await axios
        .post("/api/user/register", info)
        .then(function(response) {
          console.log("Account created successfully");
          alert(
            "Congratulations! Your account has been created successfully. Happy learning!"
          );
          event.preventDefault();
          window.location = "/";
        })
        .catch(function(error) {
          console.log(error);
          alert("Use another email, this email is taken");
        });
  }

  handleSelect(eventKey) {
    alert(`selected ${eventKey}`);
    this.setState({ value: eventKey });
  }

  handleGenderChange(e) {
    this.setState({ gender: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  render() {
    return (
      <div>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: darkturquoise;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
        </style>
        <br />
        <h1>Create an account</h1>
        <br />
        <h3>We want to know you more </h3>
        <Form>
          <Form.Group controlId="formGridName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="Enter First Name"
              onChange={evt => this.updateFirstName(evt)}
            />
          </Form.Group>
          <Form.Group controlId="formGridName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Enter Last Name"
              onChange={evt => this.updateLastName(evt)}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="e.g. student@email.com"
                onChange={evt => this.updateEmail(evt)}
              />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={evt => this.updatePassword(evt)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                value={this.state.gender}
                onChange={e => this.handleGenderChange(e)}
              >
                <option value="">other</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
        
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
                type="phoneNumber"
                placeholder="Phone Number"
                onChange={evt => this.updatePhoneNumber(evt)}
              />
          </Form.Group>
          <Form.Group controlId="formGridPhoneNumber">
            <Form.Label>GUC ID</Form.Label>
            <Form.Control
                type="gucID"
                placeholder="GUCID"
                onChange={evt => this.updateGUCID(evt)}
              />
          </Form.Group>
          <Form.Group controlId="formGridPhoneNumber">
            <Form.Label>Location</Form.Label>
            <Form.Control
                as="select"
                value={this.state.location}
                onChange={e => this.handleLocationChange(e)}
              >
                <option value="">other</option>
                <option value="heliopolis">heliopolis</option>
                <option value="rehab">rehab</option>
                <option value="maadi">maadi</option>
                <option value="nasrCity">nasrCity</option>
                <option value="dokki">dokki</option>
                <option value="fifthSettlement">fifthSettlement</option>
        
              </Form.Control>
          </Form.Group>

          <Button
            variant="flat"
            size="xxl"
            type="button"
            onClick={event => this.handleSubmit(event)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default register;
