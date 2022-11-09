import React from "react";
import TopElement from "../../component/topElement";
import BodyElement from "../../component/Dashboard/bodyDashboard";
import style from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={style.background}>
      <TopElement/>
      <BodyElement/>
    </div>
  );
};
export default Dashboard;
