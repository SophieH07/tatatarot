import React, { Component } from "react";
import cardPicDic from "./GenerateCard.js";

export class Cards extends Component {
  render() {
    return (
      <div>
        <div className="cards">
          {cardPicDic.map((card, index) => (
            <div key={index}>
              <img src={card.pic} alt={card.name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

