import React from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import "./Styles.css";

class Auth extends React.Component {
  render() {
    return (
      <div className="App">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default Auth;
