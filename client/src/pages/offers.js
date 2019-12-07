import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import axios from "axios";

class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
     userID:  window.location.pathname.split("/")[2],
     course :window.location.pathname.split("/")[3],
     offers:[]
    };
  }

  componentDidMount(){
    axios.get(`/api/student/getOffers/${this.state.course}`)
    .then(response=>{
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
      const offers=response.data;
      this.setState({offers:offers})
    })
    .catch(error => {
      this.setState({ error})
      alert(error.message+"! No offers for this course,yet!" )
  });

  }

  render() {
    return (
      <div className="App">
        <br />
        <h1>Offers </h1>
        <br/>
        {this.state.offers.map(el => {
          return (
              <div key={el}>
                <span>
                  <ListGroup.Item variant="info">
                    {el}
                  </ListGroup.Item>
                </span>
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

export default Offers;


