import React from "react";
import { Component } from "./Component";
import { PathService } from "../../../services/PathService";
import { Node } from "../../../models/Node";
import { RouteComponentProps } from "react-router";
import { Action } from "../../metadata/Actions";
import autobind from "autobind-decorator";
import { history } from "../../structure/Main";
import { ROUTES, getRoute } from "../../metadata/Routes";
import { NodeTypes, NodeType } from "../../metadata/NodeTypes";

type ContainerProps = {} & RouteComponentProps<{ id: string; action: Action }>;

type ContainerState = {
  nodes: Array<Node>;
  selectedNode?: Partial<Node>;
  isLoading: boolean;
  action: Action;
};

export class Container extends React.PureComponent<
  ContainerProps,
  ContainerState
> {
  state: ContainerState = {
    nodes: [],
    isLoading: true,
    action: Action.ADD,
    selectedNode: undefined
  };

  async componentDidMount() {
    const { action, id } = this.props.match.params;
    let selectedNode: Node | undefined;
    if (action === Action.EDIT && id !== undefined) {
      selectedNode = await PathService.getNodeById(id);
    }

    this.setState({ action, selectedNode });
  }

  @autobind
  handleChange(event: { target: { value: string; name: string } }) {
    const { value, name } = event.target;
    this.setState((prevState: ContainerState) => ({
      ...prevState,
      selectedNode: { ...prevState.selectedNode, [name]: value }
    }));
  }

  @autobind
  async handleSave() {
    const node = {
      ...this.state.selectedNode,
      id: Math.random().toString()
    } as Node;

    await PathService.appendNode(node);

    history.push(getRoute(ROUTES.NODES));
  }

  @autobind
  handleCancel() {
    history.goBack();
  }

  render() {
    return (
      <Component
        action={this.state.action}
        node={this.state.selectedNode}
        onChange={this.handleChange}
        onCancel={this.handleCancel}
        onSave={this.handleSave}
      />
    );
  }
}
