import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import "./pokemonCreate.css";

export default function PokemonCreate() {
  return (
    <div>
      <div className="nav">
        <img
          height={"30px"}
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png"
          alt=" "
        />
        <Link to={"/home"}>Home</Link>
      </div>
      <Form />
    </div>
  );
}
