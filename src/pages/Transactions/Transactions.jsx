import React from "react";
import TopElement from "../../component/topElement";
import BodyTransactions from "../../component/Transactions/BodyTransactions";
import style from "./transactions.module.css";

const Transaction = () => {
  return (
    <div className={style.background}>
      <TopElement />
      <BodyTransactions />
    </div>
  );
};
export default Transaction;
