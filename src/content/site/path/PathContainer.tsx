import React from "react";
import { Path } from "./Path";
import { PathContext } from "../../../context/PathContext";

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

  render() {
    return (
      <PathContext.Consumer>
        {value => (
          <Path
            saved={this.state.saved}
            path={value && value.path && JSON.stringify(value.path)}
            onSave={path => value.onSave(JSON.parse(path))}
          />
        )}
      </PathContext.Consumer>
    );
  }
}
