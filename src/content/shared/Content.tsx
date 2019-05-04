import * as React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../metadata/Routes";
import { PathContainer } from "../site/path/PathContainer";

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
        <Route exact path={ROUTES.BEACONS} render={() => <div>BEACONS</div>} />
        <Route exact path={ROUTES.PATH} component={PathContainer} />
      </Switch>
    </ContentWrapper>
  );
};
