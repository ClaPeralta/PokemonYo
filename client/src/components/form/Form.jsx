import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, getPokemonsTypes } from "../../actions/actions";
import validator from "./validator";
import "./form.css";

export default function Form() {
  const dispatch = useDispatch();
  const pokeTypes = useSelector((state) => state.pokemonsTypes);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
    type1: "",
    type2: "",
    sprite: "",
  });

  useEffect(() => {
    dispatch(getPokemonsTypes());
  }, [dispatch]);

  const handleInputChange = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setErrors(validator({ ...input, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addPokemon(input));
    setInput({
      name: "",
      life: "",
      attack: "",
      defense: "",
      speed: "",
      weight: "",
      height: "",
      type1: "",
      type2: "",
      sprite: "",
    });
  };
  return (
    <div className="form-container">
      <div className="create-container">
        <div className="detailCard">
          <img
            height={"50px"}
            src="https://static.thenounproject.com/png/594337-200.png"
            alt=""
          />
          <h2 className="title">Create your favorite Pokemon</h2>
        </div>

        <div className="pokemonData">
          <form onSubmit={(event) => handleSubmit(event)} className="divCreate">
            <div className="left">
              <div className="divInputCreate">
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Name"
                  value={input.name}
                  required
                  autoComplete="off"
                  className="inputCreate"
                />
              </div>
              {errors.name && <p className="error-input">{errors.name}</p>}

              <div className="divInputCreate">
                <input
                  type="number"
                  name="life"
                  onChange={handleInputChange}
                  value={input.life}
                  placeholder="Life"
                  min="0"
                  max="255"
                  required
                  className="inputCreate"
                />
              </div>
              {errors.life && <p className="error-input">{errors.life}</p>}

              <div className="divInputCreate">
                <input
                  type="number"
                  name="attack"
                  onChange={handleInputChange}
                  value={input.attack}
                  placeholder="Attack"
                  min="0"
                  max="255"
                  required
                  className="inputCreate"
                />
              </div>
              {errors.attack && <p className="error-input">{errors.attack}</p>}

              <div className="divInputCreate">
                <input
                  type="number"
                  name="defense"
                  onChange={handleInputChange}
                  value={input.defense}
                  placeholder="Defense"
                  min="0"
                  max="255"
                  required
                  className="inputCreate"
                />
              </div>
              {errors.defense && (
                <p className="error-input">{errors.defense}</p>
              )}
              <div className="divInputCreate">
                <input
                  type="number"
                  name="speed"
                  onChange={handleInputChange}
                  value={input.speed}
                  placeholder="Speed"
                  min="0"
                  max="255"
                  required
                  className="inputCreate"
                />
              </div>
              {errors.speed && <p className="error-input">{errors.speed}</p>}
            </div>

            <div className="rigth">
              <div className="divInputCreate">
                <input
                  type="number"
                  name="height"
                  onChange={handleInputChange}
                  value={input.height}
                  placeholder="Height"
                  min="0"
                  max="255"
                  required
                  className="inputCreate"
                />
              </div>
              {errors.height && <p className="error-input">{errors.height}</p>}

              <div className="divInputCreate">
                <input
                  type="number"
                  name="weight"
                  onChange={handleInputChange}
                  value={input.weight}
                  placeholder="Weight"
                  min="0"
                  max="255"
                  required
                  className="inputCreate"
                />
              </div>
              {errors.weight && <p className="error-input">{errors.weight}</p>}

              <div className="dropdown">
                <select
                  name="type1"
                  onChange={handleInputChange}
                  className="capitalizeText"
                >
                  <option value="Type One">Type One</option>
                  {pokeTypes.map((type) => (
                    <option value={type} key={type} className="capitalizeText">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              {errors.selected && (
                <p className="error-input">{errors.selected}</p>
              )}
              <div className="dropdown">
                <select
                  disabled="true"
                  id="t2"
                  name="type2"
                  onChange={handleInputChange}
                  className="capitalizeText"
                >
                  <option value="Type Two">Type Two</option>
                  {pokeTypes.map((type) => (
                    <option value={type} key={type} className="capitalizeText">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Photo */}
              <div className="divInputCreate">
                <input
                  className="inputCreate ph"
                  type="text"
                  placeholder="Image"
                  name="sprite"
                  onChange={handleInputChange}
                  value={input.sprite}
                />
              </div>
            </div>

            <div>
              <button
                id="id-sub"
                type="submit"
                className="action-button"
                name="create"
              >
                {" "}
                Create{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <img
        className="red-img"
        src="https://i.pinimg.com/originals/51/c2/54/51c25482d801d6ff7f80deee727e13c6.png"
        alt=""
      />

      <h1>CMP</h1>
    </div>
  );
}
