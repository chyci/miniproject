import React from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import PicLogin from "../../assets/PicLogin.png"
import logo from "../../assets/logo.png"
import style from './register.module.css'

function Register() {
  return (
    <div className={style.bg_utama}>
        <Container className={style.bg1}>
            <Row className='justify-content-md-center'>
                <Col xs={6}>
                  <div className={style.login_Form}>
                    <Row className='justify-content-md-center pt-3 pb-5'>
                      <Col xs lg={2}>
                        <img style={{width: '75px'}} src={logo} class="mx-auto d-block" alt="logo"/>
                      </Col>
                      <Col sm={6}>
                        <h1 className='mb-0'>UANKU</h1>
                        <p>Teman Keuanganmu</p>
                      </Col>
                    </Row>
                    <h2 className={style.text_login}>Register</h2>
                    <Form>
                      <Form.Group className="mb-3 pt-3 ps-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control className={style.input_login} type="text" placeholder="Username" />
                      </Form.Group>

                      <Form.Group className="mb-3 ps-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className={style.input_login} type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className='text-center mt-5'>
                      <Button className={style.button} type="submit">
                        Register
                      </Button>
                      </Form.Group>
                  </Form>
                  </div>
                </Col>
                <Col xs={6}>
                  <img src={PicLogin} alt='Ini Gambar' className={style.image}/>
                </Col>
            </Row>
        </Container>
      </div>
  )
}

export default Register