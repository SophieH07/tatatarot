import React, { useState, useEffect } from 'react'
import './App.css';
import Axios from 'axios';

function App() {
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/cards').then((res) => {
      setCards(res.data);
    })
  }, [])

  return (
    <div className="App">
      <h1>TATATAROT</h1>
      {cards.map((value)=> {
        return <p>{value.name} | {value.upward} | {value.downward}</p>  
      })}
    </div>
  );
}

export default App;
