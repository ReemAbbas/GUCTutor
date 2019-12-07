import React, { Component } from "react";
import {Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class TutorHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userID:  window.location.pathname.split("/").pop()
    };
  }

  async handleLogout(event) {
      await axios
        .get("/api/user/logout")
        .then(response => {
          event.preventDefault();
          window.location = `/`;
        })
        .catch(function(error) {
          alert("An error occured, please try again.");
        });
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
      width:200px !important;
      align-content: center !important;
    }
    `}
        </style>
          <br />
          <Link to={`/tutor/offer/${this.state.userID}`}>
            <ButtonToolbar>
              <Button variant="flat" size="xxl" block>
                Create Request
              </Button>
            </ButtonToolbar>
          </Link>
          <br />
          <br />
          <br />
          <Link to={`/suggestions/${this.state.userID}`}>
            <ButtonToolbar>
              <Button variant="flat" size="xxl" block>
                Show Nearby Locations
              </Button>
            </ButtonToolbar>
          </Link>
          <br />
          <br />
          <Link to={`/Studenttutor/${this.state.userID}`}>
            <ButtonToolbar>
              <Button variant="flat" size="xxl" block>
                Student/Tutor
              </Button>
            </ButtonToolbar>
          </Link>
          <br />
          <br />
          <Link to={`/`}>
            <ButtonToolbar>
              <Button variant="flat" size="xxl" block  onClick={event => this.handleLogout(event)}>
                Log Out
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

export default TutorHomePage;
