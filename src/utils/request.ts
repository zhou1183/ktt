// 引入axios
import { message } from "antd"
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios"
import Nprogress from "nprogress"
//nprogress是个js 需要类型定义ts
//npm i --save-dev @types/nprogress
// 不显示提示转圈
Nprogress.settings.showSpinner = false
// 创建axios实例
const httpService: AxiosInstance = axios.create({
  baseURL: 'http://dida100.com:8888',
  // 请求超时时间
  timeout: 3000, // 需自定义
})

//添加请求和响应拦截器
// 添加请求拦截器
httpService.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    config.headers = config.headers || {}
    // 在发送请求之前做些什么
    let token = sessionStorage.getItem('token');
    Nprogress.start()
    if (token) {
      config.headers['Authorization'] = 'Bearer' + token
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器`
httpService.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    Nprogress.done()
    if (response.status !== 200) {
      // 没有请求成功
      if (response.status === 401) {
        //没有权限
        message.info("没有权限")
      } else if ([500, 500].includes(response.status)) {
        message.info("服务器错误")
      } else if ([404].includes(response.status)) {
        message.info("找不到请求地址")
      } else {
        message.info("请求错误")
      }
    } 
    return response 
  },
  error => {
    Nprogress.done()
    message.info("请求错误")
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default httpService 