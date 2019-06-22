import { API } from "./API";

class AuthAPI extends API {
  signUp = ({ username, email, name, password }) => {
    return this.makeRequest("users", "POST", {
      username,
      email,
      name,
      password
    });
  };

  signIn = ({ email: login, password }) => {
    return this.makeRequest("auth/token", "POST", {
      login,
      password
    });
  };
}

export default new AuthAPI();
