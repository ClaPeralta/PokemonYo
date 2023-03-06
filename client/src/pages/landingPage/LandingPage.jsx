import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import gif from "../../assets/gifload/gif.js";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <div className="landing-container">
        <div className="landing-left">
          <img className="landing-logo" src={logo} alt="" />
          <h1>¡Henry PokeApp!</h1>
          <p>
            Here you can find the info about your favorite pokemons. Also you
            can create a new exclusive pokemon, just for you!
          </p>
          <Link to={"/home"}>
            <button className="landing-button">
              <b>Let's go!</b>
            </button>
          </Link>
        </div>
        <div className="landing-rigth">
          <img src={gif.landingPokeball} alt="" />
        </div>
      </div>
    </div>
  );
}
