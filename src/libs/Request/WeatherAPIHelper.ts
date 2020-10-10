import { AxiosRequestConfig } from 'axios';

import { weatherApiAxios } from '../../constants/axios.constant';
import { RequestHelper } from './RequestHelper';

export class WeatherAPIHelper extends RequestHelper {
  public async weatherRequest(
    method: AxiosRequestConfig["method"],
    url: string,
    data?: object
  ) {
    const response = await this.request(weatherApiAxios, method, url, data);

    return response;
  }
}
