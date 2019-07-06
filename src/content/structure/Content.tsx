import * as React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../metadata/Routes";
import { Container as PathContainer } from "../site/path/Container";
import { Container as BeaconsContainer } from "../site/beacons/Container";
import { Container as BeaconsDetailContainer } from "../site/beaconDetail/Container";
import { Container as NodesContainer } from "../site/nodes/Container";
import { Container as NodeAddEditContainer } from "../site/nodeAddEdit/Container";

const ContentWrapper = styled.div`
  overflow: auto;
  height: calc(100vh - 128px);
  margin-top: 64px;
  padding: 20px;
`;

export const Content: React.FC = () => {
  return (
    <ContentWrapper>
      <Switch>
        <Route path={ROUTES.BEACON} component={BeaconsDetailContainer} />
        <Route exact path={ROUTES.BEACONS} component={BeaconsContainer} />
        <Route exact path={ROUTES.PATH} component={PathContainer} />
        <Route exact path={ROUTES.NODES} component={NodesContainer} />
        <Route
          exact
          path={ROUTES.NODE_ADD_EDIT}
          component={NodeAddEditContainer}
        />
      </Switch>
    </ContentWrapper>
  );
};
