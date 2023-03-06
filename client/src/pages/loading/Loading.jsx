import React from "react";
import img from "../../assets/gifload/gif.js";
import "./Loading.css";
export default function Loading() {
  return (
    <div>
      <img className="img-loading" height={200} src={img.loadingGif} alt="" />
    </div>
  );
}
