import * as React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { isMobile } from "react-device-detect";

type MainProps = {};
type MainState = {
  open: boolean;
};

export class Main extends React.PureComponent<MainProps, MainState> {
  state: MainState = {
    open: false
  };

  render() {
    return (
      <>
        <Header isMobile={isMobile} />
        <Content />
        <Footer />
      </>
    );
  }
}
