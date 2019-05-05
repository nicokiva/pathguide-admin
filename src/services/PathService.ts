import { Path } from "../models/Path";
import axios from "axios";

export const getPath = async () => {
  const path = await axios.get<Array<Path>>(
    "https://api.myjson.com/bins/kzevw"
  );

  return path.data;
};

export const savePath = async () => {};
