import { Path } from "../models/Path";
import { HttpService } from "./HttpService";

class Service {
  private path: Array<Path> | undefined;

  async getPath() {
    if (this.path) {
      return this.path;
    }

    // const response = await HttpService.get<Array<Path>>(`path`);
    const response = await HttpService.getExternal<Array<Path>>(
      "https://api.myjson.com/bins/kzevw"
    );
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
