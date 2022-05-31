import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignupRight() {
  return (
    <>
      <div
        className="card h-75 border-0 d-flex justify-content-center align-items-center"
        style={{ marginTop: "10.4vh" }}
      >
        <h3 className="text-center font-weight-bold">Sign up for an account</h3>
        <div className="text-center mb-3 text-muted">
          Send, spend and save smarter
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Button
            style={{
              borderRadius: 8,
              border: "1px solid #d3d3d3",
              color: "black",
              backgroundColor: "#ffffff",
              width: 400,
            }}
            className="mb-4 mt-2 "
            size="md"
          >
            <img
              src={require("../img/google-color.png")}
              width="24px"
              style={{ marginRight: 7 }}
              alt="google"
            />
            Sign in with Google
          </Button>
        </div>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ width: "25vw" }}
        >
          <div style={{ borderBottom: "1px solid #718096", width: "100%" }} />
          <span className="px-1" style={{ color: "#718096", width: "19vw" }}>
            Or with email
          </span>
          <div style={{ borderBottom: "1px solid #718096", width: "100%" }} />
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
              className=" w-70"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text>
              By creating an account, you agreeing to our <b>Privacy Policy</b>,
              and <br /> <b>Electronics Communication Policy.</b>
            </Form.Text>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center align-items-center">
            <Button
              className="mb-3 mt-1 py-2"
              style={{ backgroundColor: "#194BFB",borderRadius: 12,width: "300px" }}
            >
              Sign up
            </Button>
          </Form.Group>
          <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
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
