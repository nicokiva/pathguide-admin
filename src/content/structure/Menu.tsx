import * as React from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ROUTES, getRoute } from "../metadata/Routes";
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
              onClick={() => this.handleClick(getRoute(ROUTES.BEACONS))}
              label="Beacons"
              imageUrl="https://cloud.estimote.com/images/beacons/coconut_large.png"
            />
            <ListItem
              onClick={() => this.handleClick(getRoute(ROUTES.PATH))}
              label="Camino"
              imageUrl="https://cdn1.iconfinder.com/data/icons/seo-accessibility-usability-1-3/256/Concept_Map-512.png"
            />
            <ListItem
              onClick={() => this.handleClick(getRoute(ROUTES.NODES))}
              label="Estaciones"
              imageUrl="https://cdn0.iconfinder.com/data/icons/coordinates/154/coordinates-location-point-gps-512.png"
            />
            <ListItem
              onClick={() => this.handleClick(getRoute(ROUTES.EDGES))}
              label="Conexiones"
              imageUrl="https://cdn2.iconfinder.com/data/icons/navigation-and-mapping-1/65/path-512.png"
            />
          </List>
        </ListWrapper>
      </Drawer>
    );
  }
}

export const Menu = withRouter(MenuInner);
