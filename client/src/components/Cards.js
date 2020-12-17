import React, { Component } from "react";
import cardPicDic from "./GenerateCard.js";
import "./Cards.css";
import { Link } from "react-router-dom";
import {Card} from "./Card";

export class Cards extends Component {
  render() {
    return (
      <div>
        <div className="cards">
          {cardPicDic.map((card, i) => (
            <img className="card-pic" src={card.pic} alt={card.name}>
              <Link to="/card/{card.name}" component={Card}/>
            </img>
          ))}
        </div>
      </div>
    );
  }
}
