import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import picProfil from "../../assets/profil.png";

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
    <div>
      <Row>
        <Col sm={4}>
          <div style={{ backgroundColor: "white" }}>TEST</div>
        </Col>
        <Col sm={8}>
          <div
            style={{
              backgroundColor: "#3DB6A0",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            <Row style={{ margin: "5px" }}>
              <Col style={{ margin: "10px" }}>
                <div
                  className="d-flex justify-content-around"
                  style={{ backgroundColor: "black", borderRadius: "10px" }}
                >
                  <div
                    style={{
                      padding: "20px 10px",
                      color: "white",
                    }}
                  >
                    <h3 style={{ marginBottom: "20px" }}>User's Account</h3>
                    <p>
                      “If you don’t know how to care for money, money will stay
                      away from you”
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "30px 20px 20px 20px",
                    }}
                  >
                    <img
                      src={picProfil}
                      alt="Generic placeholder image"
                      className="img-fluid rounded-circle"
                      style={{ width: "300px" }}
                    />
                  </div>
                </div>
                <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
                  <div
                    className="d-flex justify-content-around"
                    style={{ marginTop: "10px" }}
                  >
                    <div style={{ marginTop: "10px" }}>
                      <p style={{ color: "#3DB6A0", fontSize: "30px" }}>
                        Recent Transaction
                      </p>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <button
                        type="button"
                        className="btn btn-sm rounded-pill"
                        style={{ backgroundColor: "#3DB6A0", color: "white" }}
                      >
                        Viewmore
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
              <Col
                style={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <div style={{ margin: "10px" }}>
                  <p style={{ textDecoration: "underline", fontSize: "25px" }}>
                    Spent Today
                  </p>
                  <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Rp. 50.000
                  </p>
                </div>
                <div></div>
                <div></div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default BodyElement;
