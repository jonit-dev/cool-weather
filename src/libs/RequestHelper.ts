import { AxiosRequestConfig } from 'axios';

import { weatherApiAxios } from '../constants/axios.constant';

export class ConnectionHelper {
  public static async request(
    method: AxiosRequestConfig["method"],
    url: string,
    data?: object
  ) {
    const response = await weatherApiAxios({
      method,
      url,
      data,
    });

    return response;
  }
}
