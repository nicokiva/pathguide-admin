import { Path } from "../models/Path";
import axios from "axios";

const host = "http://satapc.com/pathguide";

export const getPath = async () => {
  const path = await axios.get<Array<Path>>(`${host}/path`);

  return path.data;
};

export const setPath = async (path: Array<Path>) => {
  axios.post<Array<Path>>(`${host}/setPath`, path, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};
