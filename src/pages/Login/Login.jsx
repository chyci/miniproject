import React from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import PicLogin from "../../assets/PicLogin.png"
import logo from "../../assets/logo.png"
import style from './login.module.css'
import { useNavigate, Link } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

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
                    <h2 className={style.text_login}>Login</h2>
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
                      <Link to='/dashboard'>
                        <Button className={style.button} type="submit">
                          Login
                        </Button>
                      </Link>
                      </Form.Group>
                    </Form>
                    <div className={style.direct} >
                      <p>Don't have an account? <Link to="/register"><span>Register</span></Link></p>
                    </div>
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

export default Login