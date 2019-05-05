import React from "react";
import * as PathService from "../../../services/PathService";
import { Path } from "./Path";
import { Path as PathModel } from "../../../models/Path";
import autobind from "autobind-decorator";

type PathContainerProps = {};

type PathContainerState = {
  path?: Array<PathModel>;
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
    const path = await PathService.getPath();
    this.setState({ path });
  }

  @autobind
  handleChange(path: Array<PathModel>) {
    this.setState({ path });
  }

  @autobind
  handleSave() {
    console.log(1);
  }

  render() {
    return (
      <Path
        saved={this.state.saved}
        path={this.state.path}
        onChange={this.handleChange}
        onSave={this.handleSave}
      />
    );
  }
}
