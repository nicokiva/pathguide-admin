import React from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

type PGOption = {
  value: string;
  label: React.ReactNode;
};

type PGSelectProps = {
  multiline?: boolean;
  selectedOptionValue?: string;
  options: Array<PGOption>;
  onChange?: (
    event: React.ChangeEvent<HTMLSelectElement>,
    child: React.ReactNode
  ) => void;
};

export const PGSelect: React.FC<PGSelectProps> = props => (
  <FormControl>
    <Select
      multiline={props.multiline}
      value={props.selectedOptionValue}
      onChange={props.onChange}
    >
      {props.options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
