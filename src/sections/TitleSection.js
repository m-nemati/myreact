import React, { Component } from "react";
import data from "../data.json";
import "./TitleSection.css";

import Fullpage from "../components/Fullpage";
import Navigation from "../components/Navigation";
import DownIcon from "../components/DownIcon";
import Paint from "../components/Paint";

import { SocialIcon } from "react-social-icons";
import { Link, Element } from "react-scroll";

var myColor = [
  "red",
  "yellow",
  "green",
  "pink",
  "white",
  "black",
  "orange",
  "purple"
];

class TitleSection extends Component {
  state = { color: "white" };

  changeColor = () => {
    this.setState({
      color: myColor[Math.floor(Math.random() * myColor.length)]
    });
  };
  render() {
    const { children } = this.props;
    return (
      <div>
        <div
          className="paint"
          onClick={() => {
            this.changeColor();
          }}
        >
          <Paint painticon={data.painticon.paint} />
        </div>
        <div className="wnavigate">
          {data.navigation.map(eachlink => {
            return <Navigation link={eachlink} />;
          })}
        </div>

        <Fullpage className="first">
          <h1 className="title" style={{ color: this.state.color }}>
            {data.title}
          </h1>
          <div>
            <h2 style={{ color: this.state.color }}>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="About" className="element" />
      </div>
    );
  }
}

export default TitleSection;
