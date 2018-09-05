import React, { Component } from "react";
import data from "../data.json";
import "./SkillSection.css";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import ToTop from "../components/ToTop";

class SkillSection extends Component {
  render() {
    return (
     <div>
        <Fullpage className="third">
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(eachskill => {
            return <SkillCard skill={eachskill} />;
          })}
        </div>
      </Fullpage>
      <div className="toTop" >
      <ToTop topicon={data.topicon.top}/>
     
      </div>
     </div>
    );
  }
}

export default SkillSection;
