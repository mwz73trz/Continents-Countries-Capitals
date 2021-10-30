import { Component } from "react";
import worldMapAPI from "../api/worldMapAPI";
import Continents from "../components/Continents";

class HomePage extends Component {
  state = {
    continents: [],
  };

  getContinents = async () => {
    try {
      let continentsData = await worldMapAPI.getContinents();
      this.setState({ continents: continentsData });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getContinents();
  }

  renderWelcome() {
    let continentElements = this.state.continents.map((continent, index) => {
      return (
        <li key={`continent-${index}`}>
          <Continents continent={continent} />
        </li>
      );
    });
    return (
      <div>
        <h2>Welcome to Your World Map App</h2>
        <h2>Continents</h2>
        <ul type="simple-list" style={{ listStyle: "none" }}>
          {continentElements}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.renderWelcome()}
      </div>
    );
  }
}

export default HomePage;
