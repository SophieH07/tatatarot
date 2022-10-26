import React, { Component } from "react";
import "./Generator.css";
import cardPicDic from "./CardsDictionary.js";
import backPic from "../pictures/backpage.png";

export class Generator extends Component {
  state = {
    randomNumber: 0,
    showMe: false,
    isFlipped: true,
  };

  generateRandomCard = () => {
    var randomNum = Math.floor(Math.random() * cardPicDic.length);
    var randomFlip = Boolean(Math.round(Math.random()));
    this.setState({
      randomNumber: randomNum,
      showMe: true,
      isFlipped: randomFlip,
    });
  };

  render() {
    return (
      <div className="random-card">
        <div>
          <button className="button" onClick={this.generateRandomCard}>
            PICK
          </button>
        </div>
        {this.state.showMe ? (
          <div className="chosenCard">
            <h2 className="name">{cardPicDic[this.state.randomNumber].name}</h2>
            {this.state.isFlipped ? (
              <div>
                <img
                  className="picture down"
                  src={cardPicDic[this.state.randomNumber].pic}
                  alt=""
                />
                <div className="card-description">
                  <h5>DOWNWARD</h5>
                  <p>{cardPicDic[this.state.randomNumber].downward}</p>
                </div>
              </div>
            ) : (
              <div>
                <img
                  className="picture"
                  src={cardPicDic[this.state.randomNumber].pic}
                  alt=""
                />
                <div className="card-description">
                  <h5>UPWARD</h5>
                  <p>{cardPicDic[this.state.randomNumber].upward}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <img className="picture" src={backPic} alt="" onClick={this.generateRandomCard} style={{cursor:"pointer"}} />
        )}
      </div>
    );
  }
}
