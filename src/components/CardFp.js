import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default function CardFp() {
  const cardstyles = {
    flex: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    boxshad: {
      boxShadow: "0px 16px 24px rgba(93, 106, 131, 0.02)",
      borderRadius: "16px",
      padding: "20px 20px 30px 20px",
    },
  };
  return (
    <div style={cardstyles.flex}>
      <Card className="text-center" style={cardstyles.boxshad}>
        <Card.Body>
          <Card.Title>
            <h2>Need help with your account?</h2>
          </Card.Title>
          <Card.Text
            className="mt-3"
            style={{ width: "400px", color: "#718096" }}
          >
            Enter the email address associated with your account and we will
            send you a link to reset your password.
          </Card.Text>
          <Form.Control
            type="text"
            placeholder="Enter email"
            className="mb-4 mt-4"
          />
          <Button
            className="text-center mb-2"
            style={{ width: "400px", borderRadius: 12, background: "#194BFB" }}
          >
            Send Link
          </Button>
          <div className="text-center">
            <b>Forgot your email?</b>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
