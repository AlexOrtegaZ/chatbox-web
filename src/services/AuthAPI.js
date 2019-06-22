import { API, baseUrl } from './API';

class AuthAPI extends API {
    signUp({ username, email, name, password }) {
        return this.makeRequest(
            `${baseUrl}/api/users`,
            'POST',
            {
                username, email, name, password
            }
        )
    }

    signIn({ email, password }) {
        return this.makeRequest(
            `${baseUrl}/api/auth/token`,
            'POST',
            {
                email, password
            }
        )
    }
}

export default AuthAPI;