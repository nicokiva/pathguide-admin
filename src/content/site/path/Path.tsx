import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Toast, ToastType } from "../../shared/Toast";
import autobind from "autobind-decorator";

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

  render() {
    return (
      <>
        <TextField
          fullWidth
          onChange={this.handleChange}
          label="Camino"
          multiline
          rowsMax="50"
          margin="normal"
          value={this.state.path}
        />

        <Button variant="contained" color="primary" onClick={this.handleSave}>
          Guardar
        </Button>

        {/* <Toast open={props.saved} type={ToastType.SUCCESS} /> */}
      </>
    );
  }
}
