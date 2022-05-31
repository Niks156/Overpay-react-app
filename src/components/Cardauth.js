import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import OtpInput from "react-otp-input";

export default function Cardauth() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);
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
      <Card className="text-center" style={cardstyles.boxshaControld}>
        <Card.Body>
          <Card.Title>
            <h2 style={{ fontSize: 35 }}>Verify your email</h2>
          </Card.Title>
          <Card.Text
            className="mt-3"
            style={{ width: "370px", marginLeft: 15, color: "#718096" }}
          >
            We have sent code to your email
            <b> john****@gmail.com</b>
          </Card.Text>

          <OtpInput
            value={code}
            onChange={handleChange}
            numInputs={5}
            separator={<span style={{ width: "8px" }}></span>}
            isInputNum={true}
            shouldAutoFocus={true}
            inputStyle={{
              border: "1px solid grey",
              borderRadius: "8px",
              width: "54px",
              height: "54px",
              fontSize: "12px",
              color: "#000",
              fontWeight: "400",
              caretColor: "blue",
              marginLeft: 12,
            }}
            focusStyle={{
              marginLeft: 12,
              border: "1px solid grey",
              outline: "none",
            }}
          />
          <Button
            className="text-center mb-2 mt-3"
            style={{ width: "400px", borderRadius: 12, background: "#194BFB" }}
          >
            Verify Account
          </Button>
          <Card.Text
            className="mt-3"
            style={{ width: "340px", marginLeft: 14, color: "#718096" }}
          >
            Resend code in
            <b> 59:00</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
