import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Authentication from "./components/Authentication";
import Forgotpassword from "./components/Forgotpassword";
import LoggedIn from "./components/LoggedIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/forgotpass" element={<Forgotpassword />} />
        <Route path="/loggedin" element={<LoggedIn />} />
      </Routes>
    </>
  );
}

export default App;
