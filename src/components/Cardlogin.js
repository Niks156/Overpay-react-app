import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export default function Cardlogin() {
  const cardstyles = {
    flex: {
      width: "100%",
      height: "100%",
      display: "flex",
      //   alignItems: "center",
      justifyContent: "center",
    },
    boxshad: {
      boxShadow: "0px 16px 24px rgba(93, 106, 131, 0.02)",
      marginTop: "20vh",
      marginBottom: "35vh",
      borderRadius: "16px",
      padding: "20px 20px 30px 20px",
    },
  };
  return (
    <div style={cardstyles.flex}>
      <Card className="text-center" style={cardstyles.boxshad}>
        <Card.Body>
          <Card.Title>
            <h2 style={{ width: "400px",fontSize: 35, }}>Hi, John Doe</h2>
          </Card.Title>
          <Card.Text
            className="mt-2 text-muted"
            style={{ width: "400px",fontSize: 14.2, color: "#718096" }}
          >
            You’re logged in. Well done!
          </Card.Text>
          <Button
            className="text-center mt-3"
            style={{ width: "350px", borderRadius: 12, background: "#194BFB" }}
          >
            Logout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
