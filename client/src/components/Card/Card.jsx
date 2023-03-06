import React from "react";
import { Link } from "react-router-dom";
import imgType from "../../assets/helpers/TypesIcon";
import "./card.css";
export default function Card({ id, name, img, types }) {
  return (
    <div>
      <div className="card">
        <div className="face front">
          <div className={types[0].name}>
            {img !== true ? (
              <img src={img} alt="" />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png"
                alt=""
              />
            )}

            <h3>{name}</h3>
          </div>
        </div>

        <div className="face back">
          <div className="type-container">
            <h1>{name}</h1>
            <h2>Type</h2>
            <div className="img-types">
              {types.map((t) => {
                return <img src={imgType[t.name]} alt="Type" />;
              })}
            </div>
            <Link to={"/detail:" + id}>
              <p>Details</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
