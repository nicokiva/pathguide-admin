import React from "react";
import { RouteComponentProps } from "react-router";
import { Beacon } from "../../../models/Beacon";
import { Node } from "../../../models/Node";
import { DevicesService } from "../../../services/DevicesService";
import { BeaconDetail } from "./Component";
import { PathService } from "../../../services/PathService";
import autobind from "autobind-decorator";

type ContainerProps = {} & RouteComponentProps<{ id: string }>;

type ContainerState = {
  beacon?: Beacon;
  nodes: Array<Node>;
  isLoading: boolean;
};

export class Container extends React.PureComponent<
  ContainerProps,
  ContainerState
> {
  state: ContainerState = {
    nodes: [],
    isLoading: true
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.loadById(id);
  }

  async loadById(id: string) {
    const devicesResponse = await DevicesService.getDevices();
    const { data } = devicesResponse;

    const nodes = await PathService.getNodes();

    this.setState({
      beacon: data.find(device => device.identifier === id),
      nodes,
      isLoading: false
    });
  }

  @autobind
  async handleSave(beacon: Beacon) {
    const node = this.state.nodes.find(node => node.id === beacon.identifier);
    const oldNode = this.state.nodes.find(node => node.tag === beacon.node.tag);

    if (node === oldNode) {
      return;
    }

    await PathService.swapNodes(oldNode!, node!);
  }

  render() {
    return (
      <BeaconDetail
        onSave={this.handleSave}
        beacon={this.state.beacon}
        nodes={this.state.nodes}
        isLoading={this.state.isLoading}
      />
    );
  }
}
