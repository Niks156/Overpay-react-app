import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/signin.css";

export default function SignupRight() {
  return (
    <>
      <div
        className="card c-marg h-75 border-0 text-center d-flex justify-content-center align-items-center"
        style={{ marginTop: "10.4vh" }}
      >
        <h3 className="font-weight-bold">Sign up for an account</h3>
        <div className="mb-3 text-muted">Send, spend and save smarter</div>
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/loggedin">
            <Button
              className="mb-4 mt-2 google-btn"
              size="md"
              style={{ width: 390 }}
            >
              <img
                src={require("../img/google-color.png")}
                style={{ marginRight: 7, width: 24 }}
                alt="google"
              />
              Sign in with Google
            </Button>
          </Link>
        </div>

        <div className="divider d-flex align-items-center justify-content-center">
          <div />
          <span className="px-1">Or with email</span>
          <div />
        </div>

        <Form>
          <Form.Group className="mb-4 mt-4 d-flex">
            <Form.Control
              type="name"
              placeholder="First name"
              style={{ width: 190, marginRight: 14 }}
            />
            <Form.Control
              type="name"
              placeholder="Last name"
              style={{ width: 190 }}
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-4" controlId="formBasicEmail">
            <Form.Control
              className="mb-4 w-70"
              type="email"
              placeholder="Enter email"
            />
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Text>
              By creating an account, you agreeing to our <b>Privacy Policy</b>,
              and <br /> <b>Electronics Communication Policy.</b>
            </Form.Text>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center align-items-center">
            <Button className="mb-3 mt-1 py-2 signin-btn">Sign up</Button>
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Text>
              Already have an account?{" "}
              <b>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Sign in
                </Link>
              </b>
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
      <footer style={{ display: "flex", marginTop: "58px" }}>
        <div className="mx-2 text-muted" style={{ flexGrow: "1" }}>
          Privacy Policy
        </div>
        <div className="mx-3 text-muted">Copyright 2022</div>
      </footer>
    </>
  );
}
