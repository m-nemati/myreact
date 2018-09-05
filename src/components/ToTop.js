import React, { Component } from "react";
import "./ToTop.css";

const ToTop = props => {
  return (
    <div className="top-div">
      <div className="top-icon">
        <img src={props.topicon} />
      </div>
    </div>
  );
};

export default ToTop;