import React, { Component } from "react";
import "../App.css";
import welcome from "../pictures/welcomeontarottrans.png";
import logo from "../pictures/tarotlogotrans.png";

export class Home extends Component {
  static displayName = Home.name;

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
        <p className="buttons">
          <button className="front-page-button">What is tarot?</button>
          <button className="front-page-button">See all cards</button>
          <button className="front-page-button">Pick a card</button>
        </p>
      </div>
    );
  }
}
