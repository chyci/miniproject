import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import PicTrans from "../../assets/PicTrans.png";
import style from "./BodyTransactions.module.css";
import NavigationComponent from "../navigationComponent.jsx";

const BodyTransactions = () => {
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
      <Row>
        <Col sm={3}>
          <NavigationComponent />
        </Col>
        <Col>
          <div className={style.content}>
            <Row>
              <Col>
                <div className={style.recent}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className={style.recentTitle}>
                      <p>Recent Transaction</p>
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
                <div
                  className="d-flex justify-content-around align-items-center"
                  id={style["imageTrans"]}
                >
                  <div className={style.profpic}>
                    <img
                      src={PicTrans}
                      alt="Generic placeholder image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className={style.spent}>
                  <div>
                    <p id={style["subTitle"]}>Transaction Input</p>
                    <Form>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Transaction Name :</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Transaction Name"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Your Date" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Your Price" />
                      </Form.Group>
                    </Form>
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm rounded-pill"
                        id={style["btnMore"]}
                      >
                        Submit
                      </button>
                    </div>
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
export default BodyTransactions;
