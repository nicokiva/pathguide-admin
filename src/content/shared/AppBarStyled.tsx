import React from "react";
import AppBar from "@material-ui/core/AppBar";
import styled from "styled-components";

const BarStyled = styled<any>(AppBar)``;

type AppBarStyledProps = {
  children: React.ReactChild;
  className?: string;
};

export const AppBarStyled: React.FC<AppBarStyledProps> = (
  props: AppBarStyledProps
) => <BarStyled className={props.className}>{props.children}</BarStyled>;
