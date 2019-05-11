import { Path } from "../models/Path";
import axios from "axios";

const host = "http://satapc.com/pathguide";

class Service {
  async getPath() {
    const path = await axios.get<Array<Path>>(`${host}/path`);

    return path.data;
  }

  async setPath(path: Array<Path>) {
    axios.post<Array<Path>>(`${host}/setPath`, path, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
}

export const PathService = new Service();
