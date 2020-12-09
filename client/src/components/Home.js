import React, { Component } from "react";
import "./Home.css";
import welcome from "../pictures/welcomeontarottrans.png";
import logo from "../pictures/tarotlogotrans.png";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div className="main">
        <img src={welcome} className="welcome" alt="" />
        <div className="animation">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                <img src={logo} className="logo" alt="" />
              </div>
              <div className="back">
                <img src={logo} className="logo" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
            <Link to="/description" className="front-page-button">
              What is tarot?
            </Link>
            <Link to="/cards" className="front-page-button">
              See all cards
            </Link>
            <Link to="/generator" className="front-page-button">
              Pick a card
            </Link>
        </div>
      </div>
    );
  }
}
