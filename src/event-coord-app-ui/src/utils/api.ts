import axios from "axios";
import setAuthToken from './setAuthToken';
import jwt_decode from "jwt-decode";

export function handleApiErrors (response: any) {  
  if (!response) throw Error(response.statusText)
}

export function signUpApi(username: string, email: string, password: string) {
    return axios.post('/api/signup', {email: email, password: password, username: username})
    .then((res) => {
      localStorage.setItem('jwtToken', res.data.token);
    })
    .catch((error) => { throw error })
}


export function loginApi(email: string, password: string) {
  return axios.post('/api/login', {email: email, password: password})
  .then((res) => {
    const { id_token } = res.data;
    localStorage.setItem("jwtToken", id_token);
    setAuthToken(id_token);
    const decoded = jwt_decode(id_token);
    return decoded;
  })
  .catch((error) => { throw error })
}

export function checkTokenApi(tokenFromStorage: string) {
  return axios({
    method: 'get',
    url: '/api/checkToken', 
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    },
    params: {
      token: tokenFromStorage
    }
  })
  .then((res) => {
    localStorage.setItem('jwtToken', res.data.token);
  })
  .catch((error) => { throw error })
}

export function logoutApi() {
  localStorage.removeItem("jwtToken");
  setAuthToken("");
}