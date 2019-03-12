import axios from "axios";

export function handleApiErrors (response: any) {  
  if (!response) throw Error(response.statusText)
}

export async function signUpApi(username: string, email: string, password: string) {
    return axios.post('/api/signup', {email: email, password: password, username: username})
    .then((res) => {
      console.log("Signing up user")
    })
    .catch((error) => { throw error })
}


// export async function loginApi(email: string, password: string) {
//   return axios.get('/api/login', {email: email, password: password})
//   .then((res) => {
//     console.log("Fetching user")
//   })
//   .catch((error) => { throw error })
// }