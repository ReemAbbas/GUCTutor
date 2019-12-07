import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import axios from "axios";

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
     userID:  window.location.pathname.split("/")[2],
     location:"",
     suggestions:[]
    };
  }

  async componentDidMount(){

    await axios.get(`/api/user/location/${this.state.userID}`)
    .then(response=>{
      const location=response.data;
      this.setState({location:location})
    })
    .catch(error => {
      this.setState({ error})
      alert(error.message)
  });

    axios.get(`/api/user/suggestions/locations/${this.state.location}`)
    .then(response=>{
      const suggestions=response.data;
      this.setState({suggestions:suggestions})
    })
    .catch(error => {
      this.setState({ error})
      alert(error.message)
  });

  }

  render() {
    return (
      <div className="App">
        <br />
        <h1>Nearby locations </h1>
        <br/>
        {this.state.suggestions.map(el => {
          return (
              <div key={el}>
                <span>
                  <ListGroup.Item variant="info">
                    Name: {el.name}
                  </ListGroup.Item>
                </span>
                <span>
                  <ListGroup.Item variant="info">
                    Address: {el.address}
                  </ListGroup.Item>
                </span>
                <span>
                  <ListGroup.Item variant="info">
                    Phone Number: {el.number}
                  </ListGroup.Item>
                </span>
                <span>
                  <ListGroup.Item variant="info">
                    Working Hours: {el.workingHours}
                  </ListGroup.Item>
                </span>
                <br/>
                <br />
                </div>
         )}
         )}

        <br/>
        <br/>
        <Link to={`/Studenttutor/${this.state.userID}`}>
           <Button variant="info">Done </Button>
        </Link>    
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

export default Suggestions;


