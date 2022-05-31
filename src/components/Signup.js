import React from "react";
import SignupRight from "./SignupRight";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/signin.css";

export default function Signup() {
  return (
    <>
      <Container fluid>
        <Row className="m-3">
          <Col xs={{ span: 12, order: 2 }} md={{ span: 5, order: 1 }}>
            <img
              src={require("../img/signup-logo.png")}
              alt="card"
              className="signup-img"
            />
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 7, order: 2 }}>
            <SignupRight />
          </Col>
        </Row>
      </Container>
    </>
  );
}
