import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import NavMenu from "./components/NavMenu";
import welcome from "./pictures/welcomeontarottrans.png";
import logo from "./pictures/tarotlogotrans.png";
import images from "./Pictures.js";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/cards").then((res) => {
      setCards(res.data);
    });
  }, []);

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
        <img src="./cards/chariot.jpg" />
        {/* {cards.map((v) => {
          var pic = v.name;
          var imagePath = require(pic);
          return <img src={imagePath} alt={v.name} />;
        })} */}
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

/* {cards.map((value) => {
  return (
    <p>
      {value.name} | {value.upward} | {value.downward}
    </p>
  );
})} */
