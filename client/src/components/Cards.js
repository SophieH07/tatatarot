import React, { Component } from "react";
import cardPicDic from "./GenerateCard.js";

export class Cards extends Component {
  render() {
    return (
      <div>
        <div className="cards">
          {cardPicDic.map((card, index) => (
            <div key={index}>
              <p>{card.name}</p>
              {/* <img src={card.pic} alt={pic.name} /> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

