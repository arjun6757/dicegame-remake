import React from "react";
import { useState } from "react";
import "./App.css";
import StartingScreen from "./components/StartingScreen";
import Game from "./components/Game";
import dice1 from "./assets/images/dice1.png";
import dice2 from "./assets/images/dice2.png";
import dice3 from "./assets/images/dice3.png";
import dice4 from "./assets/images/dice4.png";
import dice5 from "./assets/images/dice5.png";
import dice6 from "./assets/images/dice6.png";

function App() {
  const [pName, setName] = useState({
    p1: "",
    p2: "",
  });

  const images = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [gameStart, setGameStart] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setName((prev) => {
      return {
        ...prev,
        [name]: value, //this will dynamically update either p1 or p2 based on the event.target.name
      };
    });
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {!gameStart ? (        
      <StartingScreen change={handleChange} value={{p1: pName.p1, p2: pName.p2}} start={()=> {
        setGameStart(true);
      }}  />
    ) : (
      <Game elements={images} playername={{p1: pName.p1, p2: pName.p2}} />
    )}
    </div>
  );
}

export default App;
