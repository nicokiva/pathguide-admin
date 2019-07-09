import React from "react";
import { Nodes } from "./Component";
import { PathService } from "../../../services/PathService";
import { Node } from "../../../models/Node";
import autobind from "autobind-decorator";

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
    this.loadNodes();
  }

  @autobind
  async handleClearAll() {
    await PathService.clearNodes();
    this.loadNodes();
  }

  async loadNodes() {
    const nodes = await PathService.getNodes();
    this.setState({ nodes, isLoading: false });
  }

  render() {
    return (
      <Nodes
        nodes={this.state.nodes}
        onClearAll={this.handleClearAll}
        isLoading={this.state.isLoading}
      />
    );
  }
}
