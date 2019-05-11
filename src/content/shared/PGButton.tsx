import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  min-width: 140px;
`;

type PGButtonProps = Exclude<ButtonProps, "fullWidth">;

export const PGButton: React.FC<PGButtonProps> = (props: PGButtonProps) => (
  <ButtonWrapper>
    <Button {...props} fullWidth />
  </ButtonWrapper>
);
