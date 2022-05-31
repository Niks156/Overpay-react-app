import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SigninLeft from "./SigninLeft";

export default function Signin() {
  return (
    <>
      <Container fluid>
        <Row className="m-3">
          <Col md={7}>
            <SigninLeft />
          </Col>
          <Col md={5}>
            <img
              src={require("../img/signin-logo.png")}
              alt="card"
              style={{
                width: "559px",
                height: "95vh",
                marginRight: -10,
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
