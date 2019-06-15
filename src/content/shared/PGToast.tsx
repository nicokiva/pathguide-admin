import React from "react";
import ReactDOM from "react-dom";
import { SnackbarContent, Snackbar } from "@material-ui/core";
import styled from "styled-components";

export enum ToastType {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  WARNING = "WARNING"
}

type PGToastProps = {
  open: boolean;
  type: ToastType;
};

const SnackbarStyled = styled<any>(Snackbar)``;
// background-color: ${props.}`;

export const createToast = (props: PGToastProps) => {
  const toastContainerElement: HTMLDivElement = document.createElement("div");
  const propsWithClose: PGToastProps = {
    ...props
  };

  let rootElement = document.getElementById("toast-root");
  if (!rootElement) {
    rootElement = document.createElement("div");
    rootElement.id = "toast-root";
    document.body.appendChild(rootElement);
  }
  rootElement.appendChild(toastContainerElement);

  ReactDOM.render(<PGToast {...propsWithClose} />, toastContainerElement);
};

export const PGToast: React.FC<PGToastProps> = (props: PGToastProps) => (
  <SnackbarStyled open={props.open}>
    <SnackbarContent
      aria-describedby="client-snackbar"
      message={<span id="client-snackbar">text</span>}
    />
  </SnackbarStyled>
);
