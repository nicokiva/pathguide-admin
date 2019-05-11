import React from "react";
import AppBar from "@material-ui/core/AppBar";
import styled from "styled-components";

const BarStyled = styled<any>(AppBar)``;

type PGAppBarStyledProps = {
  children: React.ReactChild;
  className?: string;
};

export const PGAppBarStyled: React.FC<PGAppBarStyledProps> = (
  props: PGAppBarStyledProps
) => <BarStyled className={props.className}>{props.children}</BarStyled>;
