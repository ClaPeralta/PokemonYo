import React, { useState } from "react";
import "./sort.css";

export default function Sort({ pokeCurrent, setPokeCurrent, totalPoke }) {
  const [event] = useState(""); 

  const filterAndOrderBy = (event) => {
    const value = event.target.value;
    switch (value) {
      case "asc":
        orderPokeAlphabet(value);
        break;
      case "desc":
        orderPokeAlphabet(value);
        break;
      case "more_attack":
        orderPokeAttack(value);
        break;
      case "less_attack":
        orderPokeAttack(value);
        break;
      case "my_poke":
        myPoke(value);
        break;
      default:
        break;
    }
  };

  const orderPokeAlphabet = (order) => {
    if (order === "asc") {
      setPokeCurrent(
        [...pokeCurrent].sort((a, b) => {
          if (a.name > b.name) return 1;
          else if (a.name < b.name) return -1; //unicode
          else return 0; //sin cambio
        })
      );
    } else {
      setPokeCurrent(
        [...pokeCurrent].sort((a, b) => {
          if (a.name < b.name) return 1;
          else if (a.name > b.name) return -1;
          else return 0;
        })
      );
    }
  };

  const orderPokeAttack = (order) => {
    if (order !== "more_attack")
      setPokeCurrent([...pokeCurrent].sort((a, b) => a.attack - b.attack));
    else setPokeCurrent([...pokeCurrent].sort((a, b) => b.attack - a.attack));
  };

  const myPoke = () => {
    setPokeCurrent([...totalPoke].filter((poke) => poke.id.length > 2));
  };

  return (
    <div>
      <div className="dropdown">
        <select
          className="capitalizeText"
          name="order_filter"
          onChange={filterAndOrderBy}
          value={event}
        >
          <option>Filter/Order by</option>
          <option className="capitalizeText" value="asc">
            A to Z
          </option>
          <option className="capitalizeText" value="desc">
            Z to A
          </option>
          <option className="capitalizeText" value="more_attack">
            Attack +
          </option>
          <option className="capitalizeText" value="less_attack">
            Attack -
          </option>
          <option className="capitalizeText" value="my_poke">
            My pokemons
          </option>
        </select>
      </div>
    </div>
  );
}
