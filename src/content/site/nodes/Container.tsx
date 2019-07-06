import React from "react";
import { Nodes } from "./Component";
import { PathService } from "../../../services/PathService";
import { Node } from "../../../models/Node";

type ContainerProps = {};

type ContainerState = {
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
    const nodes = await PathService.getNodes();
    this.setState({ nodes, isLoading: false });
  }

  render() {
    return <Nodes nodes={this.state.nodes} isLoading={this.state.isLoading} />;
  }
}
