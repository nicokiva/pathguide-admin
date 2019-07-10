import React from "react";
import { Edges } from "./Component";
import { PathService } from "../../../services/PathService";
import { Node } from "../../../models/Node";
import autobind from "autobind-decorator";
import { Edge } from "../../../models/Edge";

type ContainerProps = {};

type ContainerState = {
  edges: Array<Edge>;
  nodes: Array<Node>;
  isLoading: boolean;
};

export class Container extends React.PureComponent<
  ContainerProps,
  ContainerState
> {
  state: ContainerState = {
    edges: [],
    nodes: [],
    isLoading: true
  };

  async componentDidMount() {
    await this.loadEdges();

    const nodes = await PathService.getNodes();
    this.setState({ nodes });
  }

  @autobind
  async handleClearAll() {
    await PathService.clearEdges();
    await this.loadEdges();
  }

  @autobind
  async handleDelete(edge: Edge) {
    await PathService.deleteEdge(edge);
    await this.loadEdges();
  }

  async loadEdges() {
    const edges = await PathService.getEdges();
    this.setState({ edges, isLoading: false });
  }

  render() {
    return (
      <Edges
        nodes={this.state.nodes}
        edges={this.state.edges}
        onDelete={this.handleDelete}
        onClearAll={this.handleClearAll}
        isLoading={this.state.isLoading}
      />
    );
  }
}
