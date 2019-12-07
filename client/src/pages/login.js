import React, { Component } from "react";
import axios from "axios";
import validator from "../validations/validations";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dimmer, Loader } from "semantic-ui-react";

class login extends Component {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.state = {
      isLoading: false,
      email: "",
      password: "",
      userID: null
    };
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const info = {
      email: this.state.email,
      password: this.state.password
    };
    const isValidated = validator.loginValidation(info);
    if (isValidated.error) alert(isValidated.error.details[0].message);
    else
      axios
        .post("/api/user/login", info)
        .then(response => {
          axios
            .get("/api/user/auth", {
              headers: { Authorization: response.data }
            })
            .then(response => {
              this.setState({
                userID: response.data.authorizedData.id
              });
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(function(error) {
          alert("Wrong Email or Password! Please try again");
          console.log(error);
        });
    this.setState({ isLoading: false });
  };

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

  render() {
    let loading;
    if (this.state.isLoading === true)
      loading = (
        <Dimmer active>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      );
    else loading = <div />;
    const img = require("../tutor.jpg");
    const divstyle = {
        width: "100%",
        height: "1000px",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover"   
   };
    if (this.state.userID === null) {
      return (
        <div className="Component" style={divstyle}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <div class="ui placeholder segment">
              {loading}
              <div class="ui stackable very relaxed two column grid">
                <div class="column">
                  <form class="ui form">
                    <div class="field">
                      <label>Email</label>
                      <div class="ui left icon input">
                        <input
                          type="text"
                          placeholder="Email"
                          onChange={evt => this.updateEmail(evt)}
                        />
                        <i aria-hidden="true" class="user icon" />
                      </div>
                    </div>
                    <div class="field">
                      <label>Password</label>
                      <div class="ui left icon input">
                        <input
                          type="password"
                          placeholder="Password"
                          onChange={evt => this.updatePassword(evt)}
                        />
                        <i aria-hidden="true" class="lock icon" />
                      </div>
                    </div>
                    <button
                      class="ui secondary button"
                      onClick={e => this.handleSignIn(e)}
                    >
                      Login
                    </button>
                    <br />{" "}  
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }else{
      this.props.history.push(`/Studenttutor/${this.state.userID}`);
      return <div />;
    }  
  }
}

export default login;