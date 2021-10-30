import { Component } from "react";
import worldMapAPI from "../api/worldMapAPI";

class CapitalsPage extends Component {
  state = {
    country: null,
  };

  getCountry = async () => {
    try {
      let countryId = this.props.match.params.countryId;
      let countryData = await worldMapAPI.getCountryById(countryId);
      console.log(countryData);
      this.setState({ country: countryData });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getCountry();
  }

  renderCapitals() {
    let capitalElements = this.state.country.capitals.map((capital, index) => {
      return <li key={`capital-${index}`}>{capital.name}</li>;
    });
    return (
      <ul type="simple-list" style={{ listStyle: "none" }}>
        {capitalElements}
      </ul>
    );
  }

  renderCountry() {
    if (!this.state.country) {
      return <p>No Country Found!</p>;
    }
    return (
      <div>
        <h1>{this.state.country.name}</h1>
        {this.renderCapitals()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Capital Page</h1>
        {this.renderCountry()}
      </div>
    );
  }
}

export default CapitalsPage;
