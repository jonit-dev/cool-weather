import { AxiosRequestConfig } from 'axios';

export class RequestHelper {
  public async request(
    axiosObj: any,
    method: AxiosRequestConfig["method"],
    url: string,
    data?: object
  ) {
    const response = await axiosObj({
      method,
      url,
      data,
    });

    return response;
  }
}
