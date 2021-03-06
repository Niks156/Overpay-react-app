import React from "react";
import Appbar from "./Appbar";
import Cardlogin from "./Cardlogin";

export default function LoggedIn() {
  const loggedin = true;
  return (
    <div>
      <Appbar loggedin={loggedin}/>
      <div style={{ backgroundColor: "#E5E5E5", height: "90vh" }}>
        <Cardlogin />
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
