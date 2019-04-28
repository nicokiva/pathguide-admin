import * as React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../metadata/Routes";

const ContentWrapper = styled.div`
  overflow: auto;
`;

export const Content: React.FC = () => {
  return (
    <ContentWrapper>
      <Switch>
        <Route exact path={ROUTES.BEACONS} render={() => <div>BEACONS</div>} />
        <Route exact path={ROUTES.PATH} render={() => <div>CAMINO</div>} />
      </Switch>
    </ContentWrapper>
  );
};
