import React from "react";

export default function LevelBar({ val }) {
  return (
    <div className="bar">
      <progress className="bar" max="255" value={val}></progress>
    </div>
  );
}
