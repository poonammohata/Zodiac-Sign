import React, { useState } from "react";
import "./styles.css";

var zodiacSignDictionary = {
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♏": "Scorpio",
  "♐": "Sagittarius",
  "♑": "Capricorn",
  "♒": "Aquarius",
  "♓": "Pisces"
};

var zodiac = Object.keys(zodiacSignDictionary);

export default function App() {
  var [mean, setMean] = useState("");
  function zodiacInputHandler(event) {
    var userInput = event.target.value;
    var mean = zodiacSignDictionary[userInput];
    if (mean === undefined) {
      mean = "There is no such zodiac sign";
    }
    setMean(mean);
  }

  function zodiacClickHandler(sign) {
    var mean = zodiacSignDictionary[sign];
    setMean(mean);
  }

  return (
    <div className="App">
      <h1 className="heading-main">Zodiac Signs</h1>
      <p className="para">
        {" "}
        Put zodiac sign or click on any zodiac sign from the below-given zodiac
        sign list and know the sign of the different zodiac.
      </p>
      <input
        className="sign-input"
        placeholder="put zodiac sign here"
        onChange={zodiacInputHandler}
      ></input>
      <h2 className="zodiac-name">{mean}</h2>
      <h3 className="zodiac-symbol">All Zodiac Signs</h3>
      {zodiac.map(function (sign) {
        return (
          <span
            className="zodiac-container"
            onClick={() => zodiacClickHandler(sign)}
            key={sign}
          >
            <span className="sign-container">{sign}</span>
          </span>
        );
      })}
    </div>
  );
}
