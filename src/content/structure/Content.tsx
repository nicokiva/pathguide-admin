import * as React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { ROUTES, getRoute } from "../metadata/Routes";
import { Container as PathContainer } from "../site/path/Container";
import { Container as BeaconsContainer } from "../site/beacons/Container";
import { Container as BeaconsDetailContainer } from "../site/beaconDetail/Container";
import { Container as NodesContainer } from "../site/nodes/Container";
import { Container as NodeAddEditContainer } from "../site/nodeAddEdit/Container";
import { Container as EdgesContainer } from "../site/edges/Container";
import { Container as EdgeAddContainer } from "../site/edgeAdd/Container";

const ContentWrapper = styled.div`
  overflow: auto;
  height: calc(100vh - 168px);
  margin-top: 64px;
  padding: 20px;
`;

export const Content: React.FC = () => {
  return (
    <ContentWrapper>
      <Switch>
        <Route
          path={getRoute(ROUTES.BEACON)}
          component={BeaconsDetailContainer}
        />
        <Route
          exact
          path={getRoute(ROUTES.BEACONS)}
          component={BeaconsContainer}
        />
        <Route exact path={getRoute(ROUTES.PATH)} component={PathContainer} />
        <Route exact path={getRoute(ROUTES.NODES)} component={NodesContainer} />
        <Route
          exact
          path={getRoute(ROUTES.NODE_ADD_EDIT)}
          component={NodeAddEditContainer}
        />
        <Route exact path={getRoute(ROUTES.EDGES)} component={EdgesContainer} />
        <Route
          exact
          path={getRoute(ROUTES.EDGE_ADD)}
          component={EdgeAddContainer}
        />
      </Switch>
    </ContentWrapper>
  );
};
