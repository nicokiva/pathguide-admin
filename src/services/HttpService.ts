import axios from "axios";

const host = "http://satapc.com/pathguide";

export class Service {
  async getLocal<T>(url: string, config = {}) {
    return this.get<T>(`${host}/${url}`, config);
  }

  async get<T>(url: string, config = {}) {
    return axios.get<T>(`${url}`, config);
  }

  async post<T>(url: string, body: object = {}, headers: object = {}) {
    return axios.post<T>(`${host}/${url}`, body, headers);
  }
}

export const HttpService = new Service();
