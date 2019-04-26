import * as React from "react";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const FooterWrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;

  & > header {
    height: 9vh;
  }
`;

export const Footer: React.FC = () => (
  <FooterWrapper>
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          TEST
        </Typography>
      </Toolbar>
    </AppBar>
  </FooterWrapper>
);
