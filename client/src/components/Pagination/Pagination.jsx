import React, { useState } from "react";
import arrow from "../../assets/icons/arrows";
import "./pagination.css";

export default function Pagination({ totalPoke, setPokeCurrent }) {
  const cards = 12;
  const [currentPag, setCurrentPag] = useState(0);

  const next = () => {
    const totalPokemons = totalPoke.length;
    const next = currentPag + 1;
    const index = next * cards;
    if (index > totalPokemons) return;
    setPokeCurrent([...totalPoke].splice(index, cards));
    setCurrentPag(next);
  };

  const prev = () => {
    const prev = currentPag - 1;
    if (prev < 0) return;
    const index = prev * cards;
    setPokeCurrent([...totalPoke].splice(index, cards));
    setCurrentPag(prev);
  };

  return (
    <div>
      <div className="pagination-container">
        <button className="button-arrow" onClick={() => prev()}>
          {" "}
          <img className="arrow-left arrow " src={arrow} alt="left" />{" "}
        </button>
        <label> {currentPag + 1} </label>
        <button className="button-arrow" onClick={() => next()}>
          {" "}
          <img className="arrow" src={arrow} alt="rigth" />
        </button>
      </div>
    </div>
  );
}
