import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Route } from "react-router-dom";

import Drugs from "./components/Drugs";
import Navigation from "./components/Navigation";
import DrugForm from "./components/DrugForm";

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

  addDrug = drug => {
    // Post request, adds a new drug into database
    axios
      .post("https://verisim-be.herokuapp.com/api/drugs", drug)
      .then(res => {
        console.log(res.data);
        this.fetchDrugs();
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchDrugs = () => {
    // Fetches drugs after modification
    axios
      .get("https://verisim-be.herokuapp.com/api/drugs")
      .then(res => {
        this.setState({ drugs: res.data });
        console.log(this.state.drugs);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact
          path="/"
          render={props => (
            <Drugs
              {...props}
              fetchDrugs={this.fetchDrugs}
              drugs={this.state.drugs}
            />
          )}
        />
        <Route
          path="/drugs-form"
          render={props => <DrugForm {...props} addDrug={this.addDrug} />}
        />
      </div>
    );
  }
}

export default App;
