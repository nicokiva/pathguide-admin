import * as React from "react";
import { Drawer, IconButton, List } from "@material-ui/core";

import { RouteComponentProps, withRouter } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ROUTES } from "../metadata/Routes";
import autobind from "autobind-decorator";
import styled from "styled-components";
import { PGListItem as ListItem } from "../shared/PGListItem";

const ListWrapper = styled.div`
  cursor: pointer;
`;

type MenuProps = {
  open: boolean;
  onMenuCloseClick: () => void;
} & RouteComponentProps;

class MenuInner extends React.PureComponent<MenuProps> {
  @autobind
  handleClick(route: string) {
    this.props.history.push(route);
    this.props.onMenuCloseClick();
  }

  render() {
    return (
      <Drawer variant="persistent" anchor="left" open={this.props.open}>
        <IconButton onClick={this.props.onMenuCloseClick}>
          <ChevronLeftIcon />
        </IconButton>

        <ListWrapper>
          <List>
            <ListItem
              onClick={() => this.handleClick(ROUTES.BEACONS)}
              label="Beacons"
              imageUrl="https://cloud.estimote.com/images/beacons/coconut_large.png"
            />
            <ListItem
              onClick={() => this.handleClick(ROUTES.PATH)}
              label="Camino"
              imageUrl="https://cdn2.iconfinder.com/data/icons/navigation-and-mapping-1/65/path-512.png"
            />
          </List>
        </ListWrapper>
      </Drawer>
    );
  }
}

export const Menu = withRouter(MenuInner);
