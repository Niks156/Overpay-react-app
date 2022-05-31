import React from "react";
import Appbar from "./Appbar";
import Cardauth from "./Cardauth";
export default function Authentication() {
  return (
    <div>
      <Appbar />
      <div style={{ backgroundColor: "#E5E5E5", height: "90vh" }}>
        <Cardauth />
        <footer style={{ display: "flex", marginTop: "-40px" }}>
          <div className="mx-5 mb-2" style={{ flexGrow: "1" }}>
            Privacy Policy
          </div>
          <div className="mx-5 mb-2">Copyright 2022</div>
        </footer>
      </div>
    </div>
  );
}
