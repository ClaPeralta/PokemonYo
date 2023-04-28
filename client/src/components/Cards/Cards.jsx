import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

export default function Cards({ pokeCurrent }) {
  return (
    <div className="cards-container">
      {Array.isArray(pokeCurrent) ? (
        pokeCurrent.map((poke) => (
          <Card
            key={poke.id}
            id={poke.id}
            name={poke.name}
            img={poke.sprite}
            types={poke.types}
            weight={poke.weight}
          />
        ))
      ) : (
        <Card
          key={pokeCurrent.id}
          id={pokeCurrent.id}
          name={pokeCurrent.name}
          img={pokeCurrent.sprite}
          types={pokeCurrent.types}
          weight={pokeCurrent.weight}
        />
      )}
    </div>
  );
}
