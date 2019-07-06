import React from "react";
import { PGTextField as TextField } from "../../shared/PGTextField";
import { PGConfirmationForm as ConfirmationForm } from "../../shared/PGConfirmationForm";
import { PGSelect as Select } from "../../shared/PGSelect";

import { Node } from "../../../models/Node";
import { Action } from "../../metadata/Actions";
import { NodeTypes } from "../../metadata/NodeTypes";

type Props = {
  node: Partial<Node>;
  action: Action;
  onSave: () => void;
  onCancel: () => void;
  onChange: (event: { target: { value: string; name: string } }) => void;
};

export const Component: React.FC<Props> = props => (
  <ConfirmationForm onSave={props.onSave} onCancel={props.onCancel}>
    <TextField
      fullWidth
      label="Descripción"
      margin="normal"
      name="description"
      value={props.node.description}
      onChange={props.onChange}
    />

    <TextField
      fullWidth
      label="Piso"
      margin="normal"
      name="floor"
      value={props.node.floor}
      onChange={props.onChange}
    />

    {/* <Select
    
      onChange={props.onChange}
      selectedOptionValue={props.node && this.state.node.tag}
      options={Object.entries(NodeTypes).map(node => ({}))}
    /> */}

    <TextField
      fullWidth
      label="Extra"
      multiline
      rows={4}
      margin="normal"
      name="extra"
      value={props.node.extra}
      onChange={props.onChange}
    />
  </ConfirmationForm>
);
