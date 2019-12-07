import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Register from "./pages/register";
import Login from "./pages/login";
import Request from "./pages/requestForm";
import Offer from "./pages/offerForm";
import Studenttutor from "./pages/studenttutor";
import NextRequestForm from "./pages/nextRequestForm";
import NextOfferForm from "./pages/nextOfferForm";
import Offers from "./pages/offers";
import Requests from "./pages/requests";
import Suggestions from "./pages/suggestions";
import StudentHomePage from "./pages/StudentHomePage";
import TutorHomePage from "./pages/TutorHomePage";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/student/request/:userID" component={Request} />
          <Route exact path="/tutor/offer/:userID" component={Offer} />
          <Route exact path="/Studenttutor/:userID" component={Studenttutor} />
          <Route exact path="/student/request/next/:userID/:semester/:major" component={NextRequestForm} />
          <Route exact path="/tutor/offer/next/:userID/:semester/:major" component={NextOfferForm} />
          <Route exact path="/offers/:userID/:course" component={Offers} />
          <Route exact path="/requests/:userID/:course" component={Requests} />
          <Route exact path="/suggestions/:userID" component={Suggestions} />
          <Route exact path="/studentHomePage/:userID" component={StudentHomePage} />
          <Route exact path="/tutorHomePage/:userID" component={TutorHomePage} />


        </Router>
      </header>
    </div>
  );
}

export default App;
