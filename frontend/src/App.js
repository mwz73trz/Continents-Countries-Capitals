import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
