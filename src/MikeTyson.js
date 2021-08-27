import React, { Component } from "react";
import miketyson from "./miketyson.png";

class MikeTyson extends Component {
  state = {
    hits: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return {
        hits: prevState.hits + 1,
      };
    });
  };

  render() {
    return (
      <div className="col">
        <img src={miketyson} width={166} alt="miketyson" />
        <br />

        <button onClick={this.addOne} className="btn btn-success m-3">
          {this.props.name}
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
            <td>{this.state.hits}</td>
          </tr>
        </tbody>
      </div>
    );
  }
}

export default MikeTyson;