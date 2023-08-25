import React from "react";
import "./styles.css";

const PokerCard = ({ pinta, value }) => {
  const colorPinta = ["♠", "♣"].includes(pinta) ? "black" : "red";
  return (
    <div className="container">
      <div className="marco" style={{ borderColor: colorPinta }}>
        <span className="icon" style={{ color: colorPinta }}>
          {pinta}
        </span>
        <h2 className="number" style={{ color: colorPinta }}>
          {value}
        </h2>
        <span className="icon" style={{ color: colorPinta }}>
          {pinta}
        </span>
      </div>
    </div>
  );
};

export default PokerCard;
