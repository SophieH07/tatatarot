import React, { Component } from 'react';
import "./Generator.css";

export class Card extends Component {
    render() {
        const card = this.props.location.state;
        return (
            <div className="cards">
                <h2 className="name">{card.name}</h2>
                <img src={card.pic} className="picture" alt=""/>
                <h3 className="name">UPWARD MEANING</h3>
                <h4 className="card-description">{card.upward}</h4>
                <h3 className="name">DOWNWARD MEANING</h3>
                <h4 className="card-description">{card.downward}</h4>
            </div>
        )
    }
}
