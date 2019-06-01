import React from "react";
import { Beacon } from "../../../models/Beacon";
import { BeaconService } from "../../../services/BeaconService";
import { Beacons } from "./Beacons";

type BeaconsContainerProps = {};

type BeaconsContainerState = {
  beacons: Array<Beacon>;
  isLoading: boolean;
};

export class BeaconsContainer extends React.PureComponent<
  BeaconsContainerProps,
  BeaconsContainerState
> {
  state: BeaconsContainerState = {
    beacons: [],
    isLoading: true
  };

  async componentDidMount() {
    const beaconsResponse = await BeaconService.getDevices();

    this.setState({ beacons: beaconsResponse.data, isLoading: false });
  }

  render() {
    return (
      <Beacons beacons={this.state.beacons} isLoading={this.state.isLoading} />
    );
  }
}
