import React from "react";
import Select, { SelectProps } from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { Input } from "@material-ui/core";

type PGOption = {
  value: string;
  label: React.ReactNode;
};

type PGSelectProps = {
  options: Array<PGOption>;
} & SelectProps;

export const PGSelect: React.FC<PGSelectProps> = props => {
  const { options, ...otherProps } = props;

  return (
    <FormControl>
      <Select {...otherProps}>
        {props.options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
