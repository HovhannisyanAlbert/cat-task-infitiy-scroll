import type { AxiosRequestConfig } from "axios";

export interface IRequest {
  method: AxiosRequestConfig["method"];
  url: AxiosRequestConfig["url"];
  data?: AxiosRequestConfig["data"];
  formData?: FormData;
  params?: AxiosRequestConfig["params"];
  contentType?: string;
}
