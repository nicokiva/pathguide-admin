import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Path as PathModel } from "../../../models/Path";
import { Toast, ToastType } from "../../shared/Toast";

type PathProps = {
  path?: Array<PathModel>;
  onChange: (path: Array<PathModel>) => void;
  onSave: () => void;
  saved: boolean;
};

export const Path: React.FC<PathProps> = (props: PathProps) => (
  <>
    <TextField
      fullWidth
      onChange={(e: { target: { value: string } }) => {
        props.onChange(JSON.parse(e.target.value));
      }}
      label="Camino"
      multiline
      rowsMax="50"
      margin="normal"
      value={JSON.stringify(props.path)}
    />

    <Button variant="contained" color="primary" onClick={props.onSave}>
      Guardar
    </Button>

    <Toast open={props.saved} type={ToastType.SUCCESS} />
  </>
);
