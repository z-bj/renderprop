import React, { Component } from "react";
import miketyson from "./miketyson.png";

class MikeTyson extends Component {
  render() {
    const { hits, addOne, name } = this.props;

    return (
      <div className="col">
        <img src={miketyson} width={166} alt="miketyson" />
        <br />

        <button onClick={addOne} className="btn btn-success m-3">
          {name} Hit
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Hits</th>
            </tr>
          </thead>
        </table>
        <tbody>
          <tr>
            <td>{hits}</td>
          </tr>
        </tbody>
      </div>
    );
  }
}

export default MikeTyson;
