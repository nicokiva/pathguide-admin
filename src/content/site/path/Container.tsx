import React from "react";
import { Component } from "./Component";
import { PathService } from "../../../services/PathService";
import autobind from "autobind-decorator";

type ContainerProps = {};

type ContainerState = {
  path?: string;
  saved: boolean;
};

export class Container extends React.PureComponent<
  ContainerProps,
  ContainerState
> {
  state: ContainerState = {
    saved: true
  };

  async componentDidMount() {
    this.loadPath();
  }

  async loadPath() {
    const path = await PathService.getPath();
    this.setState({ path: JSON.stringify(path) });
  }

  @autobind
  async handleSave(path: string) {
    PathService.setPath(JSON.parse(path) || []);
  }

  render() {
    return (
      <Component
        saved={this.state.saved}
        path={this.state.path}
        onSave={this.handleSave}
      />
    );
  }
}
