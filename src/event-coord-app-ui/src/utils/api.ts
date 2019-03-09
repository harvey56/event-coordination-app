import axios from "axios";

export async function ApiRequest(method: string, url: string, path: string, data?: any) {
    const res = await fetch(url + '/api' + path, {
      method,
      headers: {
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(handleApiErrors) // we'll make this in a second
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error })
    
    return await res.json();
}

export function handleApiErrors (response: any) {  
  if (!response.ok) throw Error(response.statusText)
  return response
}

export async function signUpApi(email: string, password: string, username: string) {
  const req = await axios.post('/api/signup', {email: email, password: password, username: username});
  
  return req;
}

// export async function signUpApi(email: string, password: string) {
//   const res = await fetch('/api/signup', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json'
//     },
//     body: JSON.stringify({ email, password })
//   })
  
//   return await res.json();
// }

export async function loginApi(email: string, password: string) {
  const res = await fetch('/api/users/login', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  
  return await res.json();
}