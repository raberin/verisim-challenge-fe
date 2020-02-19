import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Route } from "react-router-dom";
import Drugs from "./components/Drugs";

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
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <Drugs {...props} drugs={this.state.drugs} />}
        />
      </div>
    );
  }
}

export default App;
