import React from "react";
import autobind from "autobind-decorator";
import { PGTextField as TextField } from "../../shared/PGTextField";
import { PGConfirmationForm as ConfirmationForm } from "../../shared/PGConfirmationForm";
import { history } from "../../structure/Main";
import { ROUTES } from "../../metadata/Routes";

type Props = {
  path?: string;
  onSave: (path: string) => void;
  saved: boolean;
};

type State = {
  path?: string;
};

export class Component extends React.PureComponent<Props, State> {
  state: State = {};

  @autobind
  handleChange(e: { target: { value: string } }) {
    const path = e.target.value;
    this.setState({ path });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.props.path !== prevProps.path) {
      this.setState({ path: this.props.path });
    }
  }

  @autobind
  async handleSave() {
    await this.props.onSave(this.state.path || "");

    history.push(ROUTES.BEACONS);
  }

  @autobind
  handleCancel() {
    history.goBack();
  }

  render() {
    return (
      <ConfirmationForm onSave={this.handleSave} onCancel={this.handleCancel}>
        <TextField
          fullWidth
          onChange={this.handleChange}
          label="Camino"
          multiline
          rowsMax="50"
          margin="normal"
          value={this.state.path}
        />
      </ConfirmationForm>
    );
  }
}
