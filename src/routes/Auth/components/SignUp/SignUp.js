import React from "react";
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: ""
  };

  signUp = () => {
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
      <div className="signup">
        <header>
          <h2>Register</h2>
        </header>
        <div className="form-signUp">
          <input
            className="form-input"
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
            required
          />
          <input
            className="form-input"
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            className="form-input"
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            required
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
            required
          />
          <button type="submit" className="registerbtn" onClick={this.signUp}>
            REGISTER
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
