import React, { useState, useEffect } from "react";
import "./App.css";
import NavMenu from "./components/NavMenu";
import welcome from "./pictures/welcomeontarottrans.png";
import logo from "./pictures/tarotlogotrans.png";

import cardPicDic from "./components/GenerateCard.js";

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
          <button type="button" className="front-page-button">
            What is tarot?
          </button>
          <button type="button" className="front-page-button">
            See all cards
          </button>
          <button type="button" className="front-page-button">
            Pick a card
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
