import React from "react";
import { Path } from "../../models/Path";
import * as PathService from "../../services/PathService";
import { Content } from "./Content";
import autobind from "autobind-decorator";
import { PathContext, LoadingStatus } from "../../context/PathContext";

type ContentContainerProps = {};

type ContentContainerState = {
  path?: Array<Path>;
};

export class ContentContainer extends React.PureComponent<
  ContentContainerProps,
  ContentContainerState
> {
  state: ContentContainerState = {};

  async componentDidMount() {
    this.loadPath();
  }

  @autobind
  async handleSave(path: Array<Path>) {
    const response = await PathService.setPath(path || []);
  }

  async loadPath() {
    const path = await PathService.getPath();
    this.setState({ path });
  }

  @autobind
  render() {
    return (
      <PathContext.Provider
        value={{
          path: this.state.path,
          onSave: this.handleSave,
          loadingStatus: LoadingStatus.NOT_LOADING
        }}
      >
        <Content />
      </PathContext.Provider>
    );
  }
}
