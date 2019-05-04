import React from "react";
import * as PathService from "../../../services/PathService";
import { Path } from "./Path";
import { Path as PathModel } from "../../../models/Path";
import autobind from "autobind-decorator";

type PathContainerProps = {};

type PathContainerState = {
  path?: Array<PathModel>;
};

export class PathContainer extends React.PureComponent<
  PathContainerProps,
  PathContainerState
> {
  state: PathContainerState = {};

  async componentDidMount() {
    const path = await PathService.getPath();
    this.setState({ path });
  }

  @autobind
  handleChange(path: Array<PathModel>) {
    this.setState({ path });
  }

  render() {
    return <Path path={this.state.path} onChange={this.handleChange} />;
  }
}
