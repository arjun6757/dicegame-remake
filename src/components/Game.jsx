import { useEffect, useRef, useState } from "react";

export default function Game(props) {
  const dices = props.elements;
  const [start, setStart] = useState(false);

  const d1 = useRef(null);
  const d2 = useRef(null);
  const mutableText = useRef(null);

  useEffect(() => {
    let r1, r2;
    if (start) {
      const interval = setInterval(() => {
        r1 = getRandom();
        r2 = getRandom();
        d1.current.src = dices[r1];
        d2.current.src = dices[r2];
      }, 300);

      return () => {
        clearInterval(interval);
        setStart(false); //one line of code fixed entire glitch i think
        const judgement = getWinner(r1, r2);
        const heading =
          judgement === null
            ? "🤝 It’s a Tie! 🎉 Great job, both players!"
            : judgement === r1
            ? `🏆 ${
                props.playername.p1 === "" ? "Player 1" : props.playername.p1
              } wins! 🎉 Nice job!`
            : `🏆 ${
                props.playername.p2 === "" ? "Player 2" : props.playername.p2
              } wins! 🎉 Nice job!`;
        mutableText.current.textContent = heading;
      };
    }
  }, [start]);

  function getRandom() {
    return Math.floor(Math.random() * 6);
  }

  function getWinner(val1, val2) {
    return val1 > val2 ? val1 : val1 < val2 ? val2 : null;
  }

  return (
    <div className="flex flex-col p-10 bg-slate-50 rounded-xl parent-container">
      <span
        style={{ color: "#333" }}
        ref={mutableText}
        className="text-center font-sans  font-medium text-2xl mutable-heading"
      >
        Click on 'Start' to rotate the dices
      </span>
      <div className="flex p-10 gap-10 dice-parent">
        <style>
          {` @media (max-width: 600px) {
              .dice-parent {
                padding: 10px 15px;
                width: 100%;
                margin: 10px 0px;
                gap: 20px;
                }
                
                .parent-container {
                  padding: 30px 10px;
                  }
                  
                  .mutable-heading {
                   font-size: 1rem;
                  }
            }`}
        </style>

        <div
          style={{ boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)" }}
          className="bg-blue-200 p-10 rounded-xl dice-container"
        >
          <style>
            {` @media (max-width: 600px) {
              .dice-container {
                padding: 0px;
              }
            }`}
          </style>

          <img
            ref={d1}
            className={`dice scale-50 ${start ? "rotate" : null} pdice`}
            src={props.elements[0]}
            alt="dice png"
          />
          <p className="font-mono pname">id: ~{props.playername.p1}</p>
        </div>
        <div
          style={{ boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)" }}
          className="bg-green-300 p-10 rounded-xl dice-container"
        >
          <img
            ref={d2}
            className={`dice scale-50 ${start ? "rotate" : null} pdice`}
            src={props.elements[0]}
            alt="dice png"
          />
          <p className="font-mono pname">id: ~{props.playername.p2}</p>
        </div>

        <style>
          {`@media (max-width: 600px){

                .pdice {
                  scale: 1;
                  align-self: center;
                }

                .pname {
                  padding: 0px 10px;
                  padding-bottom: 5px;
                  font-size: 12px;
                  
                  }
              }`}
        </style>
      </div>
      <div className="flex gap-10 justify-center">
        <button
          onClick={() => {
            setStart(true);
            mutableText.current.textContent = "rotating...";
          }}
          className="block my-0 text-sm  font-semibold py-1 px-4 bg-green-700 text-white rounded-md active:bg-green-800 "
        >
          Start
        </button>
        <button
          onClick={() => setStart(false)}
          className="block my-0 text-sm  font-semibold py-1 px-4 bg-green-700 text-white rounded-md active:bg-green-800 "
        >
          Stop
        </button>
      </div>
    </div>
  );
}
