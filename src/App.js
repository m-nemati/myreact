import React, { Component } from "react";


import "./App.css";

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleSection />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
