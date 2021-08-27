import React, { Component } from "react";
import Benchamek from "./Benchamek";
import MikeTyson from "./MikeTyson";
import "./App.css";
import { extend } from "lodash";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Benchamek vs MikeTyson</h1>

        <div className="row">
          <Benchamek name="Benchamek" />
          <MikeTyson name="MikeTyson" />
        </div>
      </div>
    );
  }
}

export default App;
