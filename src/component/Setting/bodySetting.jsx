import React, { useState } from "react";
import { Row, Col, Button} from "react-bootstrap";
import style from "./bodySetting.module.css";
import NavigationComponent from "../navigationComponent.jsx";



const BodySetting = () => {
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
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default BodySetting;
