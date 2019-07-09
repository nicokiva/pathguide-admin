import React from "react";
import { PGTextField as TextField } from "../../shared/PGTextField";
import { PGConfirmationForm as ConfirmationForm } from "../../shared/PGConfirmationForm";
import { PGSelect as Select } from "../../shared/PGSelect";
import { Node } from "../../../models/Node";
import { Action } from "../../metadata/Actions";
import { NodeTypes } from "../../metadata/NodeTypes";

type Props = {
  node?: Partial<Node>;
  action: Action;
  onSave: () => void;
  onCancel: () => void;
  onChange: (event: { target: { value: string; name: string } }) => void;
};

export const Component: React.FC<Props> = props => (
  <ConfirmationForm onSave={props.onSave} onCancel={props.onCancel}>
    <TextField
      fullWidth
      label="Tag"
      margin="normal"
      name="tag"
      value={props.node && props.node.tag}
      onChange={props.onChange}
    />

    <TextField
      fullWidth
      label="Descripción"
      margin="normal"
      name="description"
      value={props.node && props.node.description}
      onChange={props.onChange}
    />

    <TextField
      fullWidth
      label="Piso"
      margin="normal"
      name="floor"
      type="number"
      value={props.node && props.node.floor}
      onChange={props.onChange}
    />

    <Select
      multiple
      onChange={props.onChange}
      value={props.node && props.node.types ? props.node.types : []}
      name="types"
      options={Object.entries(NodeTypes).map(type => ({
        value: type[1],
        label: type[0]
      }))}
    />

    <TextField
      fullWidth
      label="Extra"
      multiline
      rows={4}
      margin="normal"
      name="extra"
      value={props.node && props.node.extra}
      onChange={props.onChange}
    />
  </ConfirmationForm>
);
