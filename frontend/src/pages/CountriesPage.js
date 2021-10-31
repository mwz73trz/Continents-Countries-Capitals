import { Component } from "react";
import worldMapAPI from "../api/worldMapAPI";
import { Link } from "react-router-dom";

class CountriesPage extends Component {
  state = {
    continent: null,
  };

  getContinent = async () => {
    try {
      let continentId = this.props.match.params.continentId;
      let continentData = await worldMapAPI.getContinentById(continentId);
      this.setState({ continent: continentData });
    } catch (error) {
      console.log(error);
    }
  };

  createCountry = async () => {
    try {
      let input = document.getElementById("new-country-name");
      if (input) {
        let newCountryParams = {
          continent: this.state.continent.id,
          name: input.value,
          been: false,
        };
        console.log(newCountryParams);
        let data = await worldMapAPI.createCountry(newCountryParams);
        if (data) {
          this.getContinent();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getContinent();
  }

  renderCountries() {
    let countryElements = this.state.continent.countries.map(
      (country, index) => {
        return (
          <li key={`country-${index}`}>
            <Link to={`/countries/${country.id}/capitals/`}>
              {country.name}
            </Link>
          </li>
        );
      }
    );
    return (
      <div>
        <ul type="simple-list" style={{ listStyle: "none" }}>
          {countryElements}
        </ul>
        <hr />
        <input id="new-country-name" placeholder="country name" />
        <button onClick={this.createCountry}>Add New Country</button>
      </div>
    );
  }

  renderContinent() {
    if (!this.state.continent) {
      return <p>No Continent Found!</p>;
    }
    return (
      <div>
        <h1>{this.state.continent.name}</h1>
        {this.renderCountries()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Countries Page</h1>
        {this.renderContinent()}
      </div>
    );
  }
}

export default CountriesPage;
