import React from "react";
import "../../Styles.css";

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
        <header>
          <h2>Sign In</h2>
        </header>
        <div className="form-signIn">
          <input
            className="form-input"
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
            required
          />
          <button type="submit" className="registerbtn" onClick={this.signIn}>
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
