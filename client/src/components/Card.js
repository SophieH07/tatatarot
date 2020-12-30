import React, { Component } from 'react';
import "./Generator.css";

export class Card extends Component {
    render() {
        const card = this.props.location.state;
        return (
            <div className="cards">
                <h1 className="name">{card.name}</h1>
                <img src={card.pic} className="picture" alt=""/>
                <h3 className="name">upward meaning</h3>
                <h4 className="card-description">{card.upward}</h4>
                <h3 className="name">downward meaning</h3>
                <h4 className="card-description">{card.downward}</h4>
            </div>
        )
    }
}
