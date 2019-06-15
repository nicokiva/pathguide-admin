import * as React from "react";
import { Navigation } from "./Navigation";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { isMobile } from "react-device-detect";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";
import { Router } from "react-router";

export const history = createBrowserHistory();

type MainProps = {};

export class Main extends React.PureComponent<MainProps> {
  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={theme.main}>
          <>
            <Navigation isMobile={isMobile} />
            <Content />
            <Footer />
          </>
        </ThemeProvider>
      </Router>
    );
  }
}
