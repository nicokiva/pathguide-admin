import React from "react";
import { PGTextField as TextField } from "../../shared/PGTextField";
import { PGConfirmationForm as ConfirmationForm } from "../../shared/PGConfirmationForm";
import { PGSelect as Select } from "../../shared/PGSelect";
import { Edge } from "../../../models/Edge";
import { Node } from "../../../models/Node";

type Props = {
  edge?: Partial<Edge>;
  nodes: Array<Node>;
  onSave: () => void;
  onCancel: () => void;
  onChange: (event: { target: { value: string; name: string } }) => void;
};

export const Component: React.FC<Props> = props => {
  const options = props.nodes.map(node => ({
    value: node.tag,
    label: node.description
  }));

  return (
    <ConfirmationForm onSave={props.onSave} onCancel={props.onCancel}>
      <Select
        onChange={props.onChange}
        value={props.edge && props.edge.from ? props.edge.from : ""}
        name="from"
        options={options}
      />

      <Select
        onChange={props.onChange}
        value={props.edge && props.edge.to ? props.edge.to : ""}
        name="to"
        options={options}
      />

      <TextField
        fullWidth
        label="Instructions"
        margin="normal"
        name="instructions"
        value={props.edge && props.edge.instructions}
        onChange={props.onChange}
      />

      <TextField
        fullWidth
        label="Distance (in mts)"
        margin="normal"
        name="distance"
        type="number"
        value={props.edge && props.edge.distance}
        onChange={props.onChange}
      />
    </ConfirmationForm>
  );
};
