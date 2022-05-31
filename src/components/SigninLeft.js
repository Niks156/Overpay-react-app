import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SigninLeft() {
  return (
    <>
      <div className="d-flex mb-5">
        <img
          src={require("../img/logo.png")}
          style={{
            width: "40px",
            height: "40px",
            marginRight: "5px",
          }}
          alt="overpay"
        />
        <div style={{ fontWeight: "700", fontSize: 25 }}>Overpay.</div>
      </div>
      <div className="card h-75 mt-2 border-0 d-flex justify-content-center align-items-center">
        <h3 className="text-center font-weight-bold">Sign in to Overpay</h3>
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
              width: 370,
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
          style={{ width: "23vw" }}
        >
          <div style={{ borderBottom: "1px solid #718096", width: "100%" }} />
          <span className="px-1" style={{ color: "#718096", width: "19vw" }}>
            Or with email
          </span>
          <div style={{ borderBottom: "1px solid #718096", width: "100%" }} />
        </div>

        <Form>
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
          <Form.Group className="mb-3 d-flex">
            <Form.Check
              className="flex-grow-1 mx-5"
              type="checkbox"
              label="Remember me"
            />
            <Link to="/forgetpass">
              <Button
                className="bg-white border-0 text-primary"
                style={{ marginTop: -5, marginRight: 0 }}
              >
                Forget Password?
              </Button>
            </Link>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center align-items-center">
            <Link to='/authentication'>
            <Button
              className="mb-3 mt-1 py-2"
              style={{
                backgroundColor: "#194BFB",
                borderRadius: 12,
                width: "300px",
              }}
            >
              Sign in
            </Button>
            </Link>
            
          </Form.Group>
          <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
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
      <footer style={{ display: "flex", marginTop: "65px" }}>
        <div className="mx-2 mb-2 text-muted" style={{ flexGrow: "1" }}>
          Privacy Policy
        </div>
        <div className="mx-3 mb-2 text-muted">Copyright 2022</div>
      </footer>
    </>
  );
}
