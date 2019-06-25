import React, { useEffect } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import "./Auth.css";

const Auth = ({ user, validateUser, history }) => {
  useEffect(() => {
    if(user) {
      history.push('/');
    } else {
      validateUser();
    }
  }, [user]);

  return (
    <div className="App">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Auth;
