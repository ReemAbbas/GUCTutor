import React, { Component } from "react";
import {Button,Col, Form, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class offerForm extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          isLoading: false,
          major: "CSEN",
          semester: "Semester 1",
          userID:  window.location.pathname.split("/").pop()
        
        };
    }

      handleSemesterChange(e) {
        this.setState({ semester: e.target.value });
      }

      handleMajorChange(e) {
        this.setState({ major: e.target.value });
      }

     
      handleClick() {
        this.setState({ isLoading: true }, () => {
          simulateNetworkRequest().then(() => {
            this.setState({ isLoading: false });
          });
        });
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
            <h1>Major and semester selection</h1>
            <br />

            <Form>
            <Form.Group as={Col} controlId="formGridMajor">
              <Form.Label>Major</Form.Label>
              <Form.Control
                as="select"
                value={this.state.major}
                onChange={e => this.handleMajorChange(e)}
              >
                <option value="CSEN" id="option1ID" >CSEN</option>
                <option value="DMET" id="option2ID">DMET</option>
        
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridSemester">
              <Form.Label>Semester</Form.Label>
              <Form.Control
                as="select"
                value={this.state.semester}
                onChange={e => this.handleSemesterChange(e)}
              >
                <option value="Semester 1">Semester 1</option>
                <option value="Semester 2">Semester 2</option>
                <option value="Semester 3">Semester 3</option>
                <option value="Semester 4">Semester 4</option>
                <option value="Semester 5">Semester 5</option>
                <option value="Semester 6">Semester 6</option>
                <option value="Semester 7">Semester 7</option>
                <option value="Semester 9">Semester 9</option>
                <option value="Semester 10">Semester 10</option>
        
              </Form.Control>
            </Form.Group>
              <br />
          <Link to={`/tutor/offer/next/${this.state.userID}/${this.state.semester}/${this.state.major}`}>
            <ButtonToolbar>
              <Button variant="flat" size="xxl" block>
                Next
              </Button>
            </ButtonToolbar>
          </Link>
          <br />
            </Form>
              </div>
        );
      }
  
  
}

export default offerForm;
