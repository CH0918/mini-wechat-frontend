import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 定义响应数据的基本结构
interface BaseResponse<T> {
  code: number;
  data: T;
  message: string;
}

// 创建自定义的 API 类
class Api {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // 添加请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 在发送请求之前做些什么
        return config;
      },
      (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        // 对响应数据做点什么
        return response;
      },
      (error) => {
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }

  // GET 请求
  public get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<BaseResponse<T>> {
    return this.instance
      .get(url, config)
      .then((response: AxiosResponse<BaseResponse<T>>) => response.data);
  }

  // POST 请求
  public post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<BaseResponse<T>> {
    return this.instance
      .post(url, data, config)
      .then((response: AxiosResponse<BaseResponse<T>>) => response.data);
  }

  // PUT 请求
  public put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<BaseResponse<T>> {
    return this.instance
      .put(url, data, config)
      .then((response: AxiosResponse<BaseResponse<T>>) => response.data);
  }

  // DELETE 请求
  public delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<BaseResponse<T>> {
    return this.instance
      .delete(url, config)
      .then((response: AxiosResponse<BaseResponse<T>>) => response.data);
  }
}

// 创建 API 实例
const api = new Api({
  baseURL: 'https://api.example.com', // 替换为您的 API 基础 URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
