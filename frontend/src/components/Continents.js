import { Component } from "react";

class Continents extends Component {
  render() {
    return <span>{this.props.continent.name}</span>;
  }
}

export default Continents;
