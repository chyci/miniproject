import React from "react";
import TopElement from "../../component/Dashboard/topElement";
import BodyElement from "../../component/Dashboard/bodyElement";
import style from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={style.background}>
      <TopElement />
      <BodyElement />
    </div>
  );
};
export default Dashboard;
