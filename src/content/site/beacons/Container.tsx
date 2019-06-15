import React from "react";
import { Beacon } from "../../../models/Beacon";
import { DevicesService } from "../../../services/DevicesService";
import { Beacons } from "./Beacons";
import { Path } from "../../../models/Path";

type ContainerProps = {};

type ContainerState = {
  path: Array<Path>;
  beacons: Array<Beacon>;
  isLoading: boolean;
};

export class Container extends React.PureComponent<
  ContainerProps,
  ContainerState
> {
  state: ContainerState = {
    beacons: [],
    path: [],
    isLoading: true
  };

  async componentDidMount() {
    const devicesResponse = await DevicesService.getDevices();

    this.setState({ beacons: devicesResponse.data, isLoading: false });
  }

  render() {
    return (
      <Beacons beacons={this.state.beacons} isLoading={this.state.isLoading} />
    );
  }
}
