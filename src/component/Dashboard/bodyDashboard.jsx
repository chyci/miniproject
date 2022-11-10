import React, { useState } from "react";
import { Row, Col, Button} from "react-bootstrap";
import picProfil from "../../assets/profil.png";
import style from "./bodyDashboard.module.css";
import NavigationComponent from "../navigationComponent.jsx";



const BodyDashboard = () => {
  const [showText, setShowText] = useState(false);
  const handleShow = () => {
    setShowText(true);
  };

  const dataTable = [
    {
      name: "Public Transport",
      date: "06 August 2022",
      value: "Rp. 23.000",
    },
    {
      name: "Taxi Trips",
      date: "04 August 2022",
      value: "Rp. 50.000",
    },
    {
      name: "Food & Drinks",
      date: "03 August 2022",
      value: "Rp. 100.000",
    },
    {
      name: "Spotify Subscription",
      date: "01 August 2022",
      value: "Rp. 36.000",
    },
  ];

  const dataSummary = [
    {
      month: "This Month",
      value: "Rp. 300.000",
    },
    {
      month: "July",
      value: "Rp. 763.000",
    },
    {
      month: "June",
      value: "Rp. 975.000",
    },
  ];

  return (
    <div className={style.container}>
      <Row className={style.row}>
        <Col sm={2}>
          <NavigationComponent/>
        </Col>
        <Col>
          <div className={style.content}>
            <Row className={style.row}>
              <Col className={style.col}>
                <div className="d-flex justify-content-around align-items-center" id={style["profile"]}>
                  <div className={style.box1}>
                    <h3>User's Account</h3>
                    <p>
                      “If you don’t know how to care for money, money will stay
                      away from you”
                    </p>
                  </div>
                  <div className={style.profpic}>
                    <img src={picProfil} alt="Generic placeholder image" className="img-fluid rounded-circle"/>
                  </div>
                </div>
                <div className={style.recent}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className={style.recentTitle}>
                      <p>
                        Recent Transaction
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm rounded-pill"
                        id={style["btnMore"]}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                  <div id={style["recentTable"]} style={{ padding: "10px" }} className="table-responsive">
                    {dataTable.map((data, index) => {
                      return (
                        <table
                          class="table table-hover "
                          style={{
                            borderBottom: "1px solid black",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td className="col-4">{data.name}</td>
                              <td className="col-4">{data.date}</td>
                              <td className="col-4">{data.value}</td>
                            </tr>
                          </tbody>
                        </table>
                      );
                    })}
                  </div>
                </div>
              </Col>
              <Col>
                <div className={style.spent}>
                  <div>
                    <p id={style["title"]}>
                      Spent Today
                    </p>
                    <p id={style["value"]}>
                      Rp. 50.000
                    </p>
                    <p id={style["subTitle"]}>
                      Monthly Transaction Summary
                    </p>
                  </div>
                  <div className={style.summary}>
                    {dataSummary.map((data, index)=> {
                      return(
                        <div className={style.card}>
                          <p id={style["month"]}>{data.month}</p>
                          <p id={style["desc"]}>Spending Total</p>
                          <p id={style["monthValue"]}>{data.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default BodyDashboard;
