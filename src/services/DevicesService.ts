import { HttpService } from "./HttpService";
import { Beacon } from "../models/Beacon";
import { PathService } from "./PathService";

const host = "http://localhost:3001";

type GetDevicesResponse = {
  meta: {
    page: number;
    total_count: number;
  };
  data: Array<Beacon>;
};

class Service {
  private devicesResponse: GetDevicesResponse | undefined;

  async getDevices() {
    if (this.devicesResponse) {
      return this.devicesResponse;
    }

    const response = await HttpService.get<GetDevicesResponse>(`devices`);

    let { data, meta } = response.data;

    const path = await PathService.getPath();
    const devices = data.map(device => ({
      ...device,
      node: path.nodes.find(p => p.id === device.identifier)!,
      image: `https://cloud.estimote.com/images/beacons/${
        device.color
      }_large.png`
    }));

    this.devicesResponse = { meta, data: devices };

    return this.devicesResponse;
  }
}

export const DevicesService = new Service();
