import React from "react";
import imgTypes from "../../assets/helpers/TypesIcon";
import "./Details.css";

export default function Details({
  sprite,
  life,
  types,
  name,
  height,
  attack,
  defense,
  speed,
  weight,
  id,
}) {
  return (
    <div className="detail-container">
      <div className="card-container">
        <div className="detail-card">
          <h2>{name}</h2>
        </div>
        <div className="info-container">
          <div class="basic-info">
            <div className="hover-box hw-container">
              <h2>Height: {Number((height * 0.1).toFixed(2))}m</h2>
            </div>

            <div className="hover-box hw-container">
              <h2>Weight: {Number((weight * 0.1).toFixed(2))}kg</h2>
            </div>
          </div>

          <div class="hover-box id-container">
            <h2>Id: {id.slice(1, id.length)}</h2>
          </div>

          <div class="hover-box specific-info">
            <p>
              <b>Life: {life}</b>
            </p>
            <p>
              <b>Attack: {attack}</b>
            </p>
            <p>
              <b>Defense: {defense}</b>
            </p>
            <p>
              <b>Speed: {speed}</b>
            </p>
          </div>

          <div class="hover-box types-container">
            <h2>Type</h2>
            {types.map((t) => {
              return (
                <p>
                  <img src={imgTypes[t.name]} alt="Name" />
                  <b>{t.name}</b>
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="img-container">
        <img className=" hover-box sprite" src={sprite} alt="" />
      </div>
    </div>
  );
}
