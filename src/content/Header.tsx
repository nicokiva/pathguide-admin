import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Notifications } from "./Notifications";

type HeaderProps = {
  isMobile: boolean;
};

const SeparatorStyled = styled.div`
  flex-grow: 1;
`;

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <IconButton color="inherit" aria-label="Open drawer">
        <MenuIcon />
      </IconButton>

      <Typography variant="h6" color="inherit">
        Path Guide - ADMIN
      </Typography>

      <SeparatorStyled />

      {!props.isMobile && <Notifications notificationsQuantity={0} />}
    </Toolbar>
  </AppBar>
);
