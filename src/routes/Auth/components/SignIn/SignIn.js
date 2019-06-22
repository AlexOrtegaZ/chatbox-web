import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <div className="header-signUp">
          <h1>Login</h1>
          <hr />
        </div>
        <div className="form-signUp">
          <label for="name">
            <b>Name:</b>
          </label>
          <input type="text" placeholder="Enter Name" name="name" required />
          <br />
          <br />
          <label for="username">
            <b>Username:</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />
          <br />
          <br />
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <br />
          <br />
          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <br />
          <br />
          <br />
          <button type="submit" class="registerbtn">
            LOGIN
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;
