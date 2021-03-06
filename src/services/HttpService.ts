import axios from "axios";

const host = "http://23.92.211.122:3001";

export class Service {
  async get<T>(url: string, config = {}) {
    return this.getExternal<T>(`${host}/${url}`, config);
  }

  async getExternal<T>(url: string, config = {}) {
    return axios.get<T>(`${url}`, config);
  }

  async post<T>(url: string, body: object = {}, headers: object = {}) {
    return axios.post<T>(`${host}/${url}`, body, headers);
  }
}

export const HttpService = new Service();
