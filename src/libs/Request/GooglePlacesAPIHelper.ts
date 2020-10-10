import { AxiosRequestConfig } from 'axios';

import { googlePlacesApiAxios } from '../../constants/axios.constant';
import { RequestHelper } from './RequestHelper';

export class GooglePlacesAPIHelper extends RequestHelper {
  public async googlePlacesRequest(
    method: AxiosRequestConfig["method"],
    url: string,
    data?: object
  ) {
    const response = await this.request(
      googlePlacesApiAxios,
      method,
      url,
      data
    );

    return response;
  }
}
