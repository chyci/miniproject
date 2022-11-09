import React, { useState } from "react";
import { Row, Col, Button} from "react-bootstrap";
import picProfil from "../../assets/profil.png";
import style from "./bodyElement.module.css";
import NavigationComponent from "../../component/Dashboard/navigationComponent";



const BodyElement = () => {
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

  return (
    <div className={style.container}>
      <Row>
        <Col sm={3}>
          <NavigationComponent/>
        </Col>
        <Col>
          <div className={style.content}>
            <Row>
              <Col>
                <div
                  className="d-flex justify-content-around align-items-center"
                  id={style["profile"]}
                >
                  <div className={style.box1}
                  >
                    <h3>User's Account</h3>
                    <p>
                      “If you don’t know how to care for money, money will stay
                      away from you”
                    </p>
                  </div>
                  <div className={style.profpic}
                  >
                    <img
                      src={picProfil}
                      alt="Generic placeholder image"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                </div>
                <div className={style.recent}>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
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
                  <div style={{ padding: "10px" }} className="table-responsive">
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
                  <div className={style.spentHeader}>
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
                  <div></div>
                  <div></div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default BodyElement;
