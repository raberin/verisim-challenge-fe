import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Route } from "react-router-dom";
import Drugs from "./components/Drugs";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drugs: []
    };
  }

  componentDidMount() {
    // Fetching data using axios
    axios
      .get("https://verisim-be.herokuapp.com/api/drugs")
      .then(res => {
        this.setState({ drugs: res.data });
        console.log(this.state.drugs);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact
          path="/"
          render={props => <Drugs {...props} drugs={this.state.drugs} />}
        />
      </div>
    );
  }
}

export default App;
