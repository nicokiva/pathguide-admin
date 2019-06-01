import { Path } from "../models/Path";
import { HttpService } from "./HttpService";

class Service {
  private path: Array<Path> | undefined;

  async getPath() {
    if (this.path) {
      return this.path;
    }

    const response = await HttpService.getLocal<Array<Path>>(`path`);
    this.path = response.data;
    return this.path;
  }

  async setPath(path: Array<Path>) {
    this.path = undefined;

    return HttpService.post<Array<Path>>(`setPath`, path, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
}

export const PathService = new Service();
