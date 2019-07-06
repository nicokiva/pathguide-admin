import React from "react";
import { Component } from "./Component";
import { PathService } from "../../../services/PathService";
import { Path } from "../../../models/Path";

type ContainerProps = {};

type ContainerState = {
  path?: Path;
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
    this.setState({ path });
  }

  render() {
    let notificationsQuantity = 0;

    if (this.state.path) {
      if (this.state.path.nodes.length === 0) {
        notificationsQuantity++;
      }
    }

    return <Component notificationsQuantity={notificationsQuantity} />;
  }
}
