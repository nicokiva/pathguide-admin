import React from "react";
import "./App.css";
import { Header } from "./shared/Header";
import { Content } from "./content/Content";
import { Footer } from "./shared/Footer";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
