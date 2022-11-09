import React from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import picProfil from "../../assets/profil.png";
import logo from "../../assets/logo.png";
import style from "./topElement.module.css";

const TopElement = () => {
  return (
    <div className={style.background}>
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <img 
            className={style.logo}
            src={logo}
            alt="logo"
          />
        </div>
        <div>
          <Form className="d-flex">
            <InputGroup>
              <Form.Control type='search' placeholder='Search'/>
              <Button className={style.search}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </Button>
            </InputGroup>
          </Form>
        </div>
        <div className={style.profile}>
          <img src={picProfil} alt="Generic placeholder image" className="img-fluid rounded-circle border border-dark border-3"
          />
        </div>
      </div>
    </div>
  );
};

export default TopElement;
