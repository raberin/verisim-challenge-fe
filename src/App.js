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
      .get("http://localhost:5000/api/drugs")
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
      .post("http://localhost:5000/api/drugs", drug)
      .then(res => {
        console.log(res.data);
        this.setState(prevState => {
          drugs: prevState.drugs.push(drug);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateDrugsState = newDrugsArray => {
    // Updates state whenever a post/put/del request is made
    this.setState({ drugs: newDrugsArray });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact
          path="/"
          render={props => <Drugs {...props} drugs={this.state.drugs} />}
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
