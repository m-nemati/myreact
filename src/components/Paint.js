import React, { Component } from "react";
import "./Paint.css";

const Paint = props => {
  return (
    <div className="paint-div">
      <div className="paint-icon">
        <img src={props.painticon} />
      </div>
    </div>
  );
};

export default Paint;