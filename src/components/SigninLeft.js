import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/signin.css";

export default function SigninLeft() {
  return (
    <>
      <div className="d-flex mb-5 logo">
        <img src={require("../img/logo.png")} alt="overpay" />

        <Link className="logo-link" to="/">
          <div>Overpay.</div>
        </Link>
      </div>
      <div className="card h-75 mt-2 border-0 d-flex text-center justify-content-center align-items-center">
        <h3 className="font-weight-bold">Sign in to Overpay</h3>
        <div className="mb-3 text-muted">Send, spend and save smarter</div>
        <div className="d-flex justify-content-center align-items-center">
          <Button className="mb-4 mt-2 google-btn" size="md">
            <img src={require("../img/google-color.png")} alt="google" />
            Sign in with Google
          </Button>
        </div>
        <div className="divider d-flex align-items-center justify-content-center">
          <div />
          <span className="px-1">Or with email</span>
          <div />
        </div>
        <Form>
          <Form.Group className="mb-4 mt-4">
            <Form.Control
              className="mb-4 w-70 inp1"
              type="email"
              placeholder="Enter email"
            />
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3 d-flex">
            <Form.Check className=" me-5" type="checkbox" label="Remember me" />
            <Link to="/forgotpass">
              <Button
                className="bg-white border-0 text-primary"
                style={{ marginTop: -5, marginLeft: 35 }}
              >
                Forgot Password?
              </Button>
            </Link>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center align-items-center">
            <Link to="/authentication">
              <Button className="mb-3 mt-1 py-2 signin-btn">Sign in</Button>
            </Link>
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Text>
              Don't have an account?{" "}
              <b>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to="/signup"
                >
                  Sign up
                </Link>
              </b>
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
      <footer className="d-flex" style={{ marginTop: "65px" }}>
        <div className="mx-2 mb-2 text-muted" style={{ flexGrow: "1" }}>
          Privacy Policy
        </div>
        <div className="mx-3 mb-2 text-muted">Copyright 2022</div>
      </footer>
    </>
  );
}
