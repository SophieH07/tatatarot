import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "reactstrap";
import Axios from "axios";
import NavMenu from "./components/NavMenu";
import welcome from "./pictures/welcomeontarottrans.png";
import logo from "./pictures/tarotlogotrans.png";

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
        <img src={welcome} className="welcome" />
        <p>
          <img src={logo} className="logo" />
        </p>
        <p>
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

{
  /* {cards.map((value) => {
  return (
    <p>
      {value.name} | {value.upward} | {value.downward}
    </p>
  );
})} */
}
