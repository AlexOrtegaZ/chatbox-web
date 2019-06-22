import { API } from "./API";

class AuthAPI extends API {
  signUp({ username, email, name, password }) {
    return this.makeRequest("/users", "POST", {
      username,
      email,
      name,
      password
    });
  }

  signIn({ email, password }) {
    return this.makeRequest("/auth/token", "POST", {
      email,
      password
    });
  }
}

export default AuthAPI;
