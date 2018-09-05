import React, { Component } from "react";
import "./DownIcon.css";

const DownIcon = props => {
  return (
    <div className="down-div">
      <div className="down-icon">
        <img src={props.icon} />
      </div>
    </div>
  );
};

export default DownIcon;
