import React, { useState } from "react";
import { Form, Button, Row, Col, Container, InputGroup } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import PicLogin from "../../assets/PicLogin.png";
import logo from "../../assets/logo.png";
import style from "./register.module.css";
import { useNavigate, Link } from "react-router-dom";
import { IconContext } from "react-icons";

function Register() {
  const registration = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const registErrors = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  // console.log(registration);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [data, setData] = useState(registration);
  const [errMsg, setErrMsg] = useState(registErrors);
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;

  const toogleBtnPass = () => {
    setShowPass((prevState) => !prevState);
  };

  const toogleConfirmPass = () => {
    setShowConfirmPass((prevState) => !prevState);
  };

  const setErrors = (name, message) => {
    setErrMsg((prev) => ({ ...prev, [name]: message }));
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "username") {
      if (value.length < 4) {
        setErrors(name, "Username must be 4 characters");
      } else {
        setErrors(name, "");
      }
    }

    if (name === "password") {
      if (!regexPassword.test(value)) {
        setErrors(
          name,
          "Password must be include combination Uppercase, lowercase, and Number"
        );
      } else if (value.length < 8) {
        setErrors(name, "Password must be input 8 characters");
      } else if (value.confirmPassword && value !== value.password) {
        setErrors(name, "Password and Confirm Password don't match");
      } else {
        setErrors(name, "");
      }
    }

    if (name === "confirmPassword") {
      if (value.password && value !== value.password) {
        setErrors(name, "Password and Confirm Password don't match");
      } else {
        setErrors(name, "");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (data.username.trim().length === 0) {
      setErrors("username", "Please Input Confirm Username");
      valid = false;
    }
    console.log(data.username);
    console.log(data.password);
    console.log(data.password.trim().length === 0);

    if (data.password.trim().length === 0) {
      // console.log("atas");
      setErrors("password", "Please Input Password");
      valid = false;
    }

    if (data.confirmPassword.trim() === 0) {
      setErrors("confirmPassword", "Please Input Confirm Password");
      valid = false;
    }
  };

  return (
    <div className={style.bg_utama}>
      <Container className={style.bg1}>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <div className={style.login_Form}>
              <Row className="justify-content-md-center pt-3 pb-2">
                <Col xs lg={2}>
                  <img
                    style={{ width: "75px" }}
                    src={logo}
                    class="mx-auto d-block"
                    alt="logo"
                  />
                </Col>
                <Col sm={5}>
                  <h1 className="mb-0">UANKU</h1>
                  <p>Teman Keuanganmu</p>
                </Col>
              </Row>
              <h2 className={style.text_login}>Register</h2>
              <form onSubmit={handleSubmit}>
                <div className=" mb-3 pt-3 ps-5">
                  <div className="col-md-10">
                    <div className="mb-3 mt-3 label">
                      <label
                        for="username"
                        style={{
                          width: "100%",
                          textAlign: "start",
                          fontWeight: "bold",
                        }}
                        className="form-label"
                      >
                        Username:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={handleInput}
                        value={data.username}
                        minLength="3"
                        maxLength="100"
                        required
                      />
                      <span className="mb-3 text-danger">
                        {errMsg.username}
                      </span>
                    </div>
                    <div className="form-group mb-3" id={style.formGroup}>
                      <label
                        for="password"
                        className="form-label"
                        style={{
                          width: "100%",
                          textAlign: "start",
                          fontWeight: "bold",
                        }}
                      >
                        Password:
                      </label>
                      <input
                        type={showPass ? "text" : "password"}
                        className="form-control"
                        name="password"
                        onChange={handleInput}
                        value={data.password}
                        required
                      />
                      <span className={style.iconPass} onClick={toogleBtnPass}>
                        <IconContext.Provider
                          value={{ color: "#3DB6A0", size: "22px" }}
                        >
                          {showPass ? <RiEyeLine /> : <RiEyeCloseLine />}
                        </IconContext.Provider>
                      </span>
                      <span className="mb-3 text-danger">
                        {errMsg.password}
                      </span>
                    </div>
                    <div className="form-group mb-3" id={style.formGroup}>
                      <label
                        for="confirmPassword"
                        className="form-label"
                        style={{
                          width: "100%",
                          textAlign: "start",
                          fontWeight: "bold",
                        }}
                      >
                        Confirm Password:
                      </label>
                      <input
                        type={showConfirmPass ? "text" : "password"}
                        className="form-control"
                        name="confirmPassword"
                        onChange={handleInput}
                        value={data.confirmPassword}
                        required
                      />
                      <span
                        className={style.iconPass}
                        onClick={toogleConfirmPass}
                      >
                        <IconContext.Provider
                          value={{ color: "#3DB6A0", size: "22px" }}
                        >
                          {showConfirmPass ? <RiEyeLine /> : <RiEyeCloseLine />}
                        </IconContext.Provider>
                      </span>
                      <span className="mb-3 text-danger">
                        {errMsg.confirmPassword}
                      </span>
                    </div>
                    <div className="text-center mt-5">
                      <Button className={style.button} type="submit">
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
              <div className={style.direct}>
                <p>
                  Already have an account?{" "}
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <img src={PicLogin} alt="Ini Gambar" className={style.image} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
