import { AxiosError, AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";

const axios = require('axios').default;

const USERNAME = 'jack';
const PASSWORD = 'somepassword';

class AuthService {
  private login() : string {
    return axios
      .post('authenticate', { username: USERNAME, password: PASSWORD })
      .then((response: AxiosResponse) => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }

        return response.data.token;
      })
      .catch(() => {
        console.log("Incorrect login details");
      })
  }

  private getCurrentToken() : string | null {
    const token = localStorage.getItem('token');

    if (!token) {
      return this.login();
    }

    const decodedToken : any = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      return this.login();
    }

    return token;
  }

  public getAuthHeader() {
    const token = this.getCurrentToken();

    if (token) {
      return { 'Authorization': `Bearer ${token}` }
    } else {
      return {}
    }
  }
}

export default new AuthService();
