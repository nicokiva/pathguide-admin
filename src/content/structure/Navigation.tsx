import * as React from "react";
import { PGAppBarStyled as AppBar } from "../shared/PGAppBarStyled";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { PGNotifications as Notifications } from "../shared/PGNotifications";
import { Menu } from "./Menu";
import autobind from "autobind-decorator";
import { Themed } from "../../styles/theme";

type NavigationProps = {
  isMobile: boolean;
};

type NavigationState = {
  open: boolean;
};

const SeparatorStyled = styled.div`
  flex-grow: 1;
  height: 64px;
`;

// TODO: find correct type
const AppBarStyled = styled<any>(AppBar)`
  ${(props: Themed) => `background-color: ${props.theme.backgroundColor}`}
`;

export class Navigation extends React.PureComponent<
  NavigationProps,
  NavigationState
> {
  state: NavigationState = {
    open: false
  };

  @autobind
  handleMenuOpen() {
    this.setState({ open: true });
  }

  @autobind
  handleMenuClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <>
        <AppBarStyled position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" color="inherit">
              Path Guide - ADMIN
            </Typography>

            <SeparatorStyled />

            {!this.props.isMobile && (
              <Notifications notificationsQuantity={0} />
            )}
          </Toolbar>
        </AppBarStyled>

        <Menu open={this.state.open} onMenuCloseClick={this.handleMenuClose} />
      </>
    );
  }
}
