import axios from "axios";

const host = "http://satapc.com/pathguide";

export class Service {
  async get<T>(url: string) {
    return axios.get<T>(`${host}/${url}`);
  }

  async post<T>(url: string, body: object = {}, headers: object = {}) {
    return axios.post<T>(`${host}/${url}`, body, headers);
  }
}

export const HttpService = new Service();
