import React from "react";
import Axios from "axios";
import { cardPicDic } from "./GenerateCardPic.js";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/cards").then((res) => {
      setCards(res.data);
    });
  }, []);

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

// {cards.map((value) => {
//     return <p>{value.name}</p>
// })}
// <img src={chariot} />
