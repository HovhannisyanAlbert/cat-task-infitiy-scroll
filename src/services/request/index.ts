import axios, { type AxiosPromise } from "axios";

import { IRequest } from "../types";
import { ContentTypes, apiKEY } from "@/configsHTTP";

export function request(
  { method, url, data, params, contentType }: IRequest,
  formData?: FormData
): AxiosPromise {
  if (formData) {
    return axios.post(url as string, formData, {
      headers: {
        "Content-Type": contentType,
        "x-api-key": apiKEY,
      },
    });
  }
  return axios({
    method,
    url,
    headers: {
      "Content-Type": contentType ?? ContentTypes.APPLICATION_JSON,
      "x-api-key": apiKEY,
    },
    data: contentType ?? ContentTypes.MULTIPART_FORM_DATA ? formData : data,
    params,
  });
}
