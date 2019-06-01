import React from "react";
import autobind from "autobind-decorator";
import { PGTextField } from "../../shared/PGTextField";
import { PGConfirmationForm } from "../../shared/PGConfirmationForm";

type PathProps = {
  path?: string;
  onSave: (path: string) => void;
  saved: boolean;
};

type PathState = {
  path?: string;
};

export class Path extends React.PureComponent<PathProps, PathState> {
  state: PathState = {};

  @autobind
  handleChange(e: { target: { value: string } }) {
    const path = e.target.value;
    this.setState({ path });
  }

  componentDidUpdate(prevProps: PathProps, prevState: PathState) {
    if (this.props.path !== prevProps.path) {
      this.setState({ path: this.props.path });
    }
  }

  @autobind
  handleSave() {
    this.props.onSave(this.state.path || "");
  }

  @autobind
  handleCancel() {}

  render() {
    return (
      <PGConfirmationForm onSave={this.handleSave} onCancel={this.handleCancel}>
        <PGTextField
          fullWidth
          onChange={this.handleChange}
          label="Camino"
          multiline
          rowsMax="50"
          margin="normal"
          value={this.state.path}
        />
      </PGConfirmationForm>
    );
  }
}
