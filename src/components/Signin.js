import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SigninLeft from "./SigninLeft";
import '../css/signin.css'

export default function Signin() {
  return (
    <>
      <Container fluid>
        <Row className="m-3">
          <Col md={7}>
            <SigninLeft />
          </Col>
          <Col md={5} >
            <img
              src={require("../img/signin-logo.png")}
              alt="card"
              className='signin-img'
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
