import React from "react";
import { Button } from "@material-ui/core";
// import { PGToastProps, ToastType } from "../../shared/PGToastProps";
import autobind from "autobind-decorator";
import { PGButtonBar as ButtonBar } from "../../shared/PGButtonBar";
import { PGTextField } from "../../shared/PGTextField";
import { PGButton } from "../../shared/PGButton";

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
      <>
        <PGTextField
          fullWidth
          onChange={this.handleChange}
          label="Camino"
          multiline
          rowsMax="50"
          margin="normal"
          value={this.state.path}
        />

        <ButtonBar>
          <PGButton
            variant="contained"
            color="secondary"
            onClick={this.handleCancel}
          >
            Cancelar
          </PGButton>
          <PGButton
            variant="contained"
            color="primary"
            onClick={this.handleSave}
          >
            Guardar
          </PGButton>
        </ButtonBar>
        {/* <Toast open={props.saved} type={ToastType.SUCCESS} /> */}
      </>
    );
  }
}
