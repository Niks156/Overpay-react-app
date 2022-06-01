import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "../css/card.css";
import { Link } from "react-router-dom";

export default function Cardlogin() {
  return (
    <div className="c-flex">
      <Card className="text-center c-box-login">
        <Card.Body>
          <Card.Title>
            <h2 style={{ fontSize: 39 }}>Hi, John Doe</h2>
          </Card.Title>
          <Card.Text className="mt-2 .c-text-login text-muted">
            You’re logged in. Well done!
          </Card.Text>
          <Link to="/">
            <Button className="text-center c-btn-logout mt-2">Logout</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
