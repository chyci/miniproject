import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import picProfil from "../../assets/profil.png";
import logo from "../../assets/logo.png";
import style from "./elementDashboard.module.css";

const TopElement = () => {
  return (
    <div className={style.background}>
      <div class="d-flex justify-content-around">
        <div>
          <img
            src={logo}
            alt="logo"
            style={{ padding: "20px 10px 20px 20px", width: "100px" }}
          />
        </div>
        <div>
          <Form className="d-flex pt-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <div>
          <img
            src={picProfil}
            alt="Generic placeholder image"
            className="img-fluid rounded-circle border border-dark border-3"
            style={{ width: "50px", margin: "20px 10px 20px 10px" }}
          />
        </div>
      </div>
      {/* <Row> */}
      {/* <Col>
          <img
            src={logo}
            alt="logo"
            style={{ padding: "20px 10px 20px 20px", width: "100px" }}
          />
        </Col>
        <Col>
          <Form className="d-flex p-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col> */}
      {/* <Col>
          <div className="d-flex justify-content-end">
            <img
              src={picProfil}
              alt="Generic placeholder image"
              className="img-fluid rounded-circle border border-dark border-3"
              style={{ width: "50px", margin: "20px 10px 20px 10px" }}
            />
          </div>
        </Col> */}
      {/* </Row> */}
    </div>
  );
};

export default TopElement;
