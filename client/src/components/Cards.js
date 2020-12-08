import React from "react";
import { cardPicDic } from "./GenerateCard.js";

function Cards() {

  return (
    <div>
      <div className="cards">
        {cardPicDic.map((card, index) => (
          <div key={index}>
            <img src={card.pic} alt={pic.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
