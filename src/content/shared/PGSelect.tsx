import React from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

type PGOption = {
  value: string;
  label: React.ReactNode;
};

type PGSelectProps = {
  selectedOptionValue?: string;
  options: Array<PGOption>;
  onChange?: (
    event: React.ChangeEvent<HTMLSelectElement>,
    child: React.ReactNode
  ) => void;
};

export class PGSelect extends React.PureComponent<PGSelectProps> {
  render() {
    return (
      <FormControl>
        <Select
          value={this.props.selectedOptionValue}
          onChange={this.props.onChange}
          inputProps={{
            name: "age",
            id: "age-simple"
          }}
        >
          {this.props.options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}
