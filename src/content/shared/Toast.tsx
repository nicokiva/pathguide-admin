import React from "react";
import { SnackbarContent, Snackbar } from "@material-ui/core";
import styled from "styled-components";

export enum ToastType {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  WARNING = "WARNING"
}

type ToastProps = {
  open: boolean;
  type: ToastType;
};

const SnackbarStyled = styled<any>(Snackbar)``;
// background-color: ${props.}`;

export const Toast: React.FC<ToastProps> = (props: ToastProps) => (
  <SnackbarStyled open={props.open}>
    <SnackbarContent
      aria-describedby="client-snackbar"
      message={<span id="client-snackbar">text</span>}
    />
  </SnackbarStyled>
);
