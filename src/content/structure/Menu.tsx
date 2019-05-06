import * as React from "react";
import { Drawer, IconButton, List, ListItem } from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ROUTES } from "../metadata/Routes";
import autobind from "autobind-decorator";

type MenuProps = {
  open: boolean;
  onMenuCloseClick: () => void;
} & RouteComponentProps;

class MenuInner extends React.PureComponent<MenuProps> {
  @autobind
  handleClick(route: string) {
    this.props.history.push(route);
  }

  render() {
    return (
      <Drawer variant="persistent" anchor="left" open={this.props.open}>
        <IconButton onClick={this.props.onMenuCloseClick}>
          <ChevronLeftIcon />
        </IconButton>

        <List>
          <ListItem onClick={() => this.handleClick(ROUTES.BEACONS)}>
            Beacons
          </ListItem>
          <ListItem onClick={() => this.handleClick(ROUTES.PATH)}>
            Camino
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export const Menu = withRouter(MenuInner);
