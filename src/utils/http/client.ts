import axios from 'axios'

const Axios = axios

Axios.defaults.timeout = 30000

//  http request 拦截器
Axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error.response.data)
)

//  http response 拦截器
Axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export default Axios
