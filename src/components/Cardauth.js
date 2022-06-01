import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import OtpInput from "react-otp-input";
import "../css/card.css";

export default function Cardauth() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  return (
    <div className="c-flex">
      <Card className="text-center c-box">
        <Card.Body className="d-flex text-center flex-column justify-content-center">
          <Card.Title>
            <h2 style={{ fontSize: 35 }}>Verify your email</h2>
          </Card.Title>
          <Card.Text className="mt-2 c-text-auth">
            We have sent code to your email
            <b> john****@gmail.com</b>
          </Card.Text>

          <div className="c-resp-inp">
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
                // justifyContent: "center",
              }}
              focusStyle={{
                border: "1px solid grey",
                outline: "none",
              }}
            />
          </div>

          <Button className="text-center mb-2 mt-3 c-btn">
            Verify Account
          </Button>
          <Card.Text className="mt-3 c-text2">
            Resend code in
            <b> 59:00</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
