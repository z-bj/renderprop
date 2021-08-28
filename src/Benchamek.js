import React, { Component } from "react";
import benchamek from "./benchamek.png";

class Benchamek extends Component {
  render() {
    const { hits, addOne, name } = this.props;

    return (
      <div className="col">
        <img src={benchamek} width={125} alt="benchamek" />
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

export default Benchamek;
