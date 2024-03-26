import { GetCatsPayload } from "@/Cats/store/types";
import type { AxiosResponse } from "axios";
import { request } from "../request";
import { RequestMethods, baseURL } from "@/configsHTTP";

export const getCatsData = (params: GetCatsPayload): Promise<AxiosResponse> =>
  request({
    method: RequestMethods.GET,
    url: `${baseURL}/search`,
    params,
  });

export const getCatData = ({ id }: { id: string }): Promise<AxiosResponse> =>
  request({
    method: RequestMethods.GET,
    url: `${baseURL}/${id}`,
  });

export const uploadCatImage = (formData: FormData): Promise<AxiosResponse> =>
  request(
    {
      method: RequestMethods.POST,
      url: `${baseURL}/upload`,
    },
    formData
  );
