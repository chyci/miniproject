import React, { useState } from "react";
import { Form, Row, Col, Button} from "react-bootstrap";
import style from "./bodySetting.module.css";
import NavigationComponent from "../navigationComponent.jsx";
import setPic from "../../assets/setPic.png"



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
              <img src={setPic} alt='Ini Gambar' className={style.image}/>              
              </Col>
              <Col>
                <div className={style.spent}>
                  <div>
                  <h3 id={style["title"]}>
                      Setting's
                    </h3>
                    <p id={style["subTitle"]}>
                      Change's Name
                    </p>
                  </div>
                  <div>
                  <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>New Name :</Form.Label>
                        <Form.Control className={style.input_login} type="text" placeholder="Name" />
                      </Form.Group>
                      <Form.Group className='text-end'>
                        <Button className="btn btn-sm rounded-pill" id={style["button"]} type="submit">
                          Update
                        </Button>
                      </Form.Group>
                  </Form>
                    <p id={style["subTitle"]}>
                    Edit Account
                    </p>
                  <Form>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>New Username :</Form.Label>
                        <Form.Control className={style.input_login} type="text" placeholder="Username" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>New Password :</Form.Label>
                        <Form.Control className={style.input_login} type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="text-end">
                        <Button className="btn btn-sm rounded-pill" id={style["button"]} type="submit">
                          Update
                        </Button>
                      </Form.Group>
                    </Form>
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
