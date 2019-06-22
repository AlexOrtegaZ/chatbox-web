import React from "react";
class SignUp extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: ""
  };
  signUp = event => {
    const { signUp } = this.props;
    const { name, username, email, password } = this.state;

    signUp({ name, username, email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className="header-signUp">
          <h1>Register</h1>
          <hr />
        </div>
        <div className="form-signUp">
          <label htmlFor="name">
            <b>Name:</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
          <label htmlFor="username">
            <b>Username:</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
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
          <button type="submit" className="registerbtn" onClick={this.signUp}>
            REGISTER
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;
