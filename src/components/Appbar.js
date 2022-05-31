import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Appbar({ loggedin }) {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand style={{ color: "white" }} href="/">
            <img
              src={require("../img/logo.png")}
              width="35"
              height="30"
              style={{ marginTop: -3, marginRight: 6 }}
              alt="Overpay logo"
            />
            Overpay.
          </Navbar.Brand>
          <Button
            style={{ borderRadius: 12, background: "#194BFB" }}
            // onClick={handlelogout}
            className="mb-1 mt-1"
            size="lg"
          >
            {loggedin ? "logout" : "sign in"}
          </Button>
        </Container>
      </Navbar>
    </>
  );
}
