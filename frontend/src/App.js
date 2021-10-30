import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/continents/:continentId"
              exact
              component={CountriesPage}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
