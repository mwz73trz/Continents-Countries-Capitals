import { Component } from "react";
import { Link } from "react-router-dom";

class Continents extends Component {
  render() {
    return (
      <span>
        <Link to={`/continents/${this.props.continent.id}`}>
          {this.props.continent.name}
        </Link>
      </span>
    );
  }
}

export default Continents;
