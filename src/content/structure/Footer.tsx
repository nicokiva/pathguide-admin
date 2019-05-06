import * as React from "react";
import { AppBarStyled as AppBar } from "../shared/AppBarStyled";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const AppBarStyled = styled<any>(AppBar)`
  && {
    bottom: 0;
    height: 64px;
    left: 0;
    right: 0;
    top: auto;
  }
`;

export const Footer: React.FC = () => (
  <AppBarStyled>
    <Toolbar>
      <Typography variant="h6" color="inherit" />
    </Toolbar>
  </AppBarStyled>
);
