import React, { Component } from "react";
import cardPicDic from "./GenerateCard.js";
import "./Cards.css";

export class Cards extends Component {
  render() {
    return (
      <div>
        <div className="cards">
          {cardPicDic.map((card, index) => (
              <img className="card-pic" src={card.pic} alt={card.name} />
              ))}
        </div>
      </div>
    );
  }
}

