import React, { useState } from "react";
import { Row, Col, Button} from "react-bootstrap";
import picProfil from "../../assets/profil.png";
import author from "../../assets/author.png"
import style from "./bodyAbout.module.css";
import NavigationComponent from "../navigationComponent.jsx";



const BodyElement = () => {
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
                <div className={style.spent}>
                  <div>
                  <h3 id={style["title"]}>
                      About
                    </h3>
                    <p id={style["subTitle"]}>
                      UANKU
                    </p>
                    <p id={style["paragraph"]}>
                    UANKU is a website created to help record personal finances and make it easier for users to manage finances.
                    <br/><br/>
                    UANKU was developed on the basis of the complaints of millennials and gen z who complain that their finances are not tracked and sometimes just run out without knowing where it is going. UANKU is a platform that is open to everyone and ready to be used to support healthy finances for all Indonesian people
                    <br/><br/>
                    With UANKU, users' finances can be more recorded and controlled.
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  id={style["profile"]}
                >
                  
                </div>
                <div className={style.recent}>
                  <div>  
                    <h3 id={style["title"]}>
                      About
                    </h3>
                    <p id={style["subTitle"]}>
                      UANKU
                    </p>
                    <p id={style["paragraph"]}>
                    My name is Chycik Ayu Winata, a 5th semester informatics student who is taking MBKM SIB batch-3 at Alterra. I made this website to fulfill my mini project assignment.
                    <br/><br/>
                    I created a web about financial records based on my own experience as a boarding house student who has managed his own money for daily life and also based on complaints from my friends whose money has run out somewhere.
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
export default BodyElement;
