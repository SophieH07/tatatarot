import React, { Component } from "react";
import cardPicDic from "./GenerateCard.js";
import "./Cards.css";
import { Link } from "react-router-dom";

export class Cards extends Component {
  render() {
    return (
      <div>
        <div className="cards">
          {cardPicDic.map((card, i) => (
            <Link to={{
              pathname: `/card/${card.name}`,
              state: card
              }}>
              <img className="card-pic" src={card.pic} alt={card.name} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
