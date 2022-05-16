import axios from 'axios'
// import { getToken } from "@/utils/auth"

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (config.isAuth) {
      // config.headers['Authorization'] = "Bearer " + getToken();
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== '00000') {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
