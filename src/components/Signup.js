import React from "react";
import SignupRight from "./SignupRight";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Signup() {
  return (
    <>
      <Container fluid>
        <Row className="m-3">
          <Col md={5}>
            <img
              src={require("../img/signup-logo.png")}
              alt="card"
              style={{
                width: "569px",
                height: "95vh",
                marginLeft: -10,
              }}
            />
          </Col>
          <Col md={7}>
            <SignupRight />
          </Col>
        </Row>
      </Container>
    </>
  );
}
