import React, { Component } from "react";

import "./Navigation.css";

import {Link, Element } from "react-scroll";

class Navigation extends Component {
  render() {
    const { link } = this.props;
    return (
      <div className="navigate">
        <ul>
          <li>
            <Link
              activeClass="active"
              to={link.llink}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <a href="">{link.llink}</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
