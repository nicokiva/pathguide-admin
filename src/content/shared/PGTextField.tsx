import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

type PGTextFieldProps = TextFieldProps;

export const PGTextField: React.FC<PGTextFieldProps> = (
  props: PGTextFieldProps
) => <TextField {...props} value={props.value ? `${props.value}` : ""} />;
