import React from 'react';
import Axios from "axios";

//PICTURES
import chariot from "../cards/chariot.jpg";
import death from "../cards/death.jpg";
import emperor from "../cards/emperor.jpg";
import empress from "../cards/empress.jpg";
import fool from "../cards/fool.jpg";
import hermit from "../cards/hermit.jpg";
import hierophant from "../cards/hierophant.webp";
import highpriestess from "../cards/high-priestess.jpg";
import judgement from "../cards/chariot.jpg";

function Cards() {

    const cardPicList = [
        
    ]

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
      Axios.get("http://localhost:3001/cards").then((res) => {
        setCards(res.data);
      });
    }, []);

    return (
        <div>
            <img src={cardPics} />
        </div>
    )
}


export default Cards;

// {cards.map((value) => {
//     return <p>{value.name}</p>
// })}
// <img src={chariot} />