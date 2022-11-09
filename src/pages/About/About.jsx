import React from "react";
import TopElement from "../../component/topElement";
import BodyAbout from "../../component/About/bodyAbout";
import style from "./about.module.css";

const About = () => {
  return (
    <div className={style.background}>
      <TopElement/>
      <BodyAbout/>
    </div>
  );
};
export default About;