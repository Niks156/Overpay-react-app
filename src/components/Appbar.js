import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Appbar({ loggedin }) {
  return (
    <>
      <Navbar bg="dark">
        <Container fluid>
          <Link style={{textDecoration:"none"}} to="/">
            <Navbar.Brand style={{ color: "white" }} href="/">
              <img
                src={require("../img/logo.png")}
                width="35"
                height="30"
                style={{ marginTop: -3, marginLeft: 6 }}
                alt="Overpay logo"
              />
              Overpay.
            </Navbar.Brand>
          </Link>

          <Link to="/">
            <Button
              style={{ borderRadius: 12, background: "#194BFB" }}
              className="mb-1 mt-1 me-3"
              size="lg"
            >
              {loggedin ? "logout" : "sign in"}
            </Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
