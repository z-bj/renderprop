import React, { Component } from "react";
import Benchamek from "./Benchamek";
import MikeTyson from "./MikeTyson";
import AddHits from "./AddHits";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Benchamek vs MikeTyson</h1>

        <div className="row">
          <AddHits
            render={(hits, addOne, mega) =>
              mega.benchamek && (
                <Benchamek hits={hits} addOne={addOne} name="Benchamek" />
              )
            }
          />

          <AddHits
            render={(hits, addOne, mega) =>
              mega.miketyson && (
                <MikeTyson hits={hits} addOne={addOne} name="MikeTyson" />
              )
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
