import { HttpService } from "./HttpService";
import { Beacon } from "../models/Beacon";

// const host = "https://cloud.estimote.com/v3";
const host = "http://localhost:3001";

type GetDevicesResponse = {
  meta: {
    page: number;
    total_count: number;
  };
  data: Array<Beacon>;
};

class Service {
  private beacons: GetDevicesResponse | undefined;

  async getDevices() {
    if (this.beacons) {
      return this.beacons;
    }

    const response = await HttpService.get<GetDevicesResponse>(
      `${host}/devices`
    );

    this.beacons = response.data;
    return this.beacons;
  }
}

export const BeaconService = new Service();
