import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class landingPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isLoading: false
    };
  }

  handleClick() {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false });
      });
    });
  }

  handleSelect(eventKey) {
    alert(`selected ${eventKey}`);
    this.setState({ value: eventKey });
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
          <h1 style={{ color: 'black' }}> Newbie ? Create an account!</h1>
          <br />
          <br />
          <Link to={`/register`}>
            <ButtonToolbar>
              <Button variant="flat" size="xxl" block>
                Register
              </Button>
            </ButtonToolbar>
          </Link>
          <br />
      
          <h1 style={{ color: 'black' }}>Already have an account ? Login!</h1>
          <br />
          <br />
          <Link to={`/login`}>
            <ButtonToolbar>
              <Button variant="flat" size="xxl" block>
                Login
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

export default landingPage;
