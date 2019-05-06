import * as React from "react";
import { Navigation } from "./Navigation";
import { ContentContainer } from "./ContentContainer";
import { Footer } from "./Footer";
import { isMobile } from "react-device-detect";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";
import { Router } from "react-router";

const history = createBrowserHistory();

type MainProps = {};

export class Main extends React.PureComponent<MainProps> {
  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={theme.main}>
          <>
            <Navigation isMobile={isMobile} />
            <ContentContainer />
            <Footer />
          </>
        </ThemeProvider>
      </Router>
    );
  }
}
