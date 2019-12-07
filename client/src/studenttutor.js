import React, { Component } from "react";
import {Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class studenttutor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userID:  window.location.pathname.split("/").pop()
    };
  }
  
  render() {
    let loading = <div />;
    const img = require("../tutor.jpg");
    const divStyle = {
        width: "100%" ,
        height: "1000px",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover"   
   };
    return (
      <div className="Component" style={divStyle}>
         <div
            style={{
              position: "absolute" ,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          ></div>
      <div class="ui placeholder segment">
              {loading}
              </div>
      <div>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: darkturquoise;
      color: black;
      margin-left: 45% !important;
    }

    .btn-xxl {
      padding: 1rem 1.5rem ;
      font-size: 1.5rem;
      width:150px !important;
      align-content: center !important;
    }
    `}
        </style>
          <h1 style={{ color: 'black' }}> Are you a student</h1>
          <br />
          <br />
          <Link to={`/studentHomePage/${this.state.userID}`}>
            <ButtonToolbar>
              <Button variant="flat" size="xxl" block>
                Student
              </Button>
            </ButtonToolbar>
          </Link>
          <br />
          <h1 style={{ color: 'black' }}>....or a tutor?</h1>
          <br />
          <br />
          <Link to={`/tutorHomePage/${this.state.userID}`}>
            <ButtonToolbar>
              <Button variant="flat" size="xxl" block>
                Tutor 
              </Button>
            </ButtonToolbar>
          </Link>
          <br />
      </div>
        <div
        class="alert alert-secondary"
        role="alert"
        style={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "darkturquoise", padding: "0.01rem 0.01rem"  }}
      >
        Copyright © 2019 GUC Tutor Inc. All Rights Reserved.{" "}
      </div>
      </div> 
    );
  }
}

export default studenttutor;
