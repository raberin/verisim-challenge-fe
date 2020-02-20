import React from "react";
import axios from "axios";

import "./Drugs.css";

class Drug extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editButtonClicked: false,
      updatedPost: {
        name: "",
        iupac_name: "",
        smiles: "",
        molecular_formula: "",
        cas_number: "",
        mw: "",
        class: "",
        superclass: "",
        rotateable_bond_count: "",
        complexity: ""
      }
    };
  }

  deleteDrug = () => {
    axios
      .delete(`http://localhost:5000/api/drugs/${this.props.id}`)
      .then(res => {
        console.log(res);
        this.props.fetchDrugs();
        alert(`${this.props.name} has been deleted!`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateDrug = updatedPost => {
    // Updates the current item using the updatedPost in state
    axios
      .put(`http://localhost:5000/api/drugs/${this.props.id}`, updatedPost)
      .then(res => {
        this.props.fetchDrugs();
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="drugCard">
        <div className="drugButtons">
          <span onClick={this.updateDrug}>Edit</span>
          <span className="x-button" onClick={this.deleteDrug}>
            X
          </span>
        </div>
        <div className="drugContent">
          <h3>{this.props.name}</h3>
          <p>Molecular Formula: {this.props.formula}</p>
          <p>IUPAC: {this.props.iupac}</p>
          <p>SMILES: {this.props.smiles}</p>
          <p>Molecular Weight: {this.props.mw}</p>
        </div>
      </div>
    );
  }
}

export default Drug;
