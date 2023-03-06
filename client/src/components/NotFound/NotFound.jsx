import React from "react";
import img from "../../assets/gifload/gif.js";
import "./notFound.css";
export default function NotFound() {
  return (
    <div className="container-notFound">
      <img className="notFound-gif" src={img.notFoundGif} alt="" />
      <div className="mesage-container">
        <h1>Oh no!</h1>
        <p>Can't find what you're looking for</p>
      </div>
    </div>
  );
}
