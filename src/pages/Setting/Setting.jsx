import React from "react";
import TopElement from "../../component/topElement";
import BodySetting from "../../component/Setting/bodySetting";
import style from "./setting.module.css";

const Setting = () => {
  return (
    <div className={style.background}>
      <TopElement/>
      <BodySetting/>
    </div>
  );
};
export default Setting;
