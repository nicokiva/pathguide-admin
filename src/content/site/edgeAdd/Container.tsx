import React from "react";
import { Component } from "./Component";
import { PathService } from "../../../services/PathService";
import { RouteComponentProps } from "react-router";
import { Action } from "../../metadata/Actions";
import autobind from "autobind-decorator";
import { history } from "../../structure/Main";
import { ROUTES, getRoute } from "../../metadata/Routes";
import { Edge } from "../../../models/Edge";
import { Node } from "../../../models/Node";

type ContainerProps = {};

type ContainerState = {
  edge?: Partial<Edge>;
  isLoading: boolean;
  nodes: Array<Node>;
};

export class Container extends React.PureComponent<
  ContainerProps,
  ContainerState
> {
  state: ContainerState = {
    isLoading: true,
    edge: undefined,
    nodes: []
  };

  async componentDidMount() {
    const nodes = await PathService.getNodes();
    this.setState({ nodes });
  }

  @autobind
  handleChange(event: { target: { value: string; name: string } }) {
    const { value, name } = event.target;

    const parsedValue = name === "distance" ? Number(value) : value;
    this.setState((prevState: ContainerState) => ({
      ...prevState,
      edge: { ...prevState.edge, [name]: parsedValue }
    }));
  }

  @autobind
  async handleSave() {
    if (!this.state.edge) {
      return;
    }

    await PathService.appendEdge(this.state.edge as Edge);
    history.push(getRoute(ROUTES.EDGES));
  }

  @autobind
  handleCancel() {
    history.goBack();
  }

  render() {
    return (
      <Component
        edge={this.state.edge}
        nodes={this.state.nodes}
        onChange={this.handleChange}
        onCancel={this.handleCancel}
        onSave={this.handleSave}
      />
    );
  }
}
