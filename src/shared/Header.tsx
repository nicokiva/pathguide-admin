import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #eeeeee;
  border-radius: 4px;
  display: flex;
  height: 9vh;
  justify-content: center;
  padding: 20px;
`;

export const Header: React.FC = () => (
  <HeaderWrapper>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Path Guide - ADMIN
        </Typography>
      </Toolbar>
    </AppBar>
  </HeaderWrapper>
);
