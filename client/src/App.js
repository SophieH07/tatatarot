import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "./App.css";
import NavMenu from "./components/NavMenu";
import welcome from "./pictures/welcomeontarottrans.png";
import logo from "./pictures/tarotlogotrans.png";

function App() {
  return (
    <div>
      <NavMenu />
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
          <Link to={"/description"} className="front-page-button">
            What is tarot?
          </Link>
          <Link to={"/cards"} className="front-page-button">
            See all cards
          </Link>
          <Link to={"/generator"} className="front-page-button">
            Pick a card
          </Link>
        </p>
      </div>
    </div>
  );
}

export default App;
