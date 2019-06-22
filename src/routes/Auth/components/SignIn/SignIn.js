import React from "react";
class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };
  signIn = event => {
    const { signIn } = this.props;
    const { email, password } = this.state;

    signIn({ email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <div className="header-signIn">
          <h1>Login</h1>
          <hr />
        </div>
        <div className="form-signIn">
          <label htmlFor="email">
            <b>Email:</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
          <label htmlFor="password">
            <b>Password:</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
          <br />
          <button type="submit" className="registerbtn" onClick={this.signIn}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
