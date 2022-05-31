import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "../css/cardfp.css";

export default function CardFp() {
  return (
    <div className="c-flex">
      <Card className="text-center c-box">
        <Card.Body>
          <Card.Title>
            <h2>Need help with your account?</h2>
          </Card.Title>
          <Card.Text className="mt-3 c-text">
            Enter the email address associated with your account and we will
            send you a link to reset your password.
          </Card.Text>
          <Form.Control
            type="text"
            placeholder="Enter email"
            className="mb-4 mt-4"
          />
          <Button className="text-center mb-3 c-btn">Send Link</Button>
          <div className="text-center">
            <b>Forgot your email?</b>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
