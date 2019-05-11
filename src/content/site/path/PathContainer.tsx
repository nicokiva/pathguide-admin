import React from "react";
import { Path } from "./Path";
import { PathService } from "../../../services/PathService";
import autobind from "autobind-decorator";

type PathContainerProps = {};

type PathContainerState = {
  path?: string;
  saved: boolean;
};

export class PathContainer extends React.PureComponent<
  PathContainerProps,
  PathContainerState
> {
  state: PathContainerState = {
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
    const response = await PathService.setPath(JSON.parse(path) || []);
    console.log(response);
  }

  render() {
    return (
      <Path
        saved={this.state.saved}
        path={this.state.path}
        onSave={this.handleSave}
      />
    );
  }
}
