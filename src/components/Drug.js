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
      .delete(`https://verisim-be.herokuapp.com/${this.props.id}`)
      .then(res => {
        console.log(res);
        this.props.fetchDrugs();
        alert(`${this.props.name} has been deleted!`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateDrug = updated => {
    // Updates the current item using the updatedPost in state
    axios
      .put(`https://verisim-be.herokuapp.com/${this.props.id}`, updated)
      .then(res => {
        console.log(res);
        this.props.fetchDrugs();
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = event => {
    //Changes the state/tracks to be updated on the form
    this.setState({
      updatedPost: {
        ...this.state.updatedPost,
        //Since on the inputs theres a "name" value it can be used as a key to change
        //All the inputs dynamically instead of creating a handler for all of em
        [event.target.name]: event.target.value
      }
    });
  };

  showEditForm = () => {
    //Checks prevState of editButton, if it was clicked set it to true if not flip the boolean
    this.setState(prevState => {
      if (prevState.editButtonClicked === false) {
        return { editButtonClicked: true };
      } else {
        return { editButtonClicked: !prevState.editButtonClicked };
      }
    });
  };

  submitEditDrug = event => {
    event.preventDefault();
    //Runs the postMessage fxn in App.js, and adds the friendPost
    //object into the database
    console.log(this.state.updatedPost);
    this.updateDrug(this.state.updatedPost);
    this.setState({
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
    });
  };

  render() {
    return (
      <div className="drugCard">
        <div
          className={
            this.state.editButtonClicked === false
              ? "display-on"
              : "display-off"
          }
        >
          <div className="drugButtons">
            <span onClick={this.showEditForm}>Edit</span>
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

        <div
          className={
            this.state.editButtonClicked === false
              ? "display-off"
              : "display-on-edit"
          }
        >
          <div className="drugButtons-edit">
            <span onClick={this.showEditForm}>X</span>
          </div>
          <h2>Edit Drug</h2>
          <form className="edit-form" onSubmit={this.submitEditDrug}>
            <label for="name">Name</label>
            <input
              onChange={this.handleInputChange}
              placeholder="Name"
              value={this.state.updatedPost.name}
              name="name"
            />
            <label for="iupac_name">IUPAC Name</label>
            <input
              onChange={this.handleInputChange}
              placeholder="IUPAC Name"
              value={this.state.updatedPost.iupac_name}
              name="iupac_name"
            />
            <label for="smiles">SMILES</label>
            <input
              onChange={this.handleInputChange}
              placeholder="SMILES"
              value={this.state.updatedPost.smiles}
              name="smiles"
            />
            <label for="molecular_formula">Molecular Formula</label>
            <input
              onChange={this.handleInputChange}
              placeholder="Molecular Formula"
              value={this.state.updatedPost.molecularFormula}
              name="molecular_formula"
            />
            <label for="cas_number">CAS Number</label>
            <input
              onChange={this.handleInputChange}
              placeholder="CAS Number"
              value={this.state.updatedPost.casNumber}
              name="cas_number"
            />
            <label for="mw">Molecular Weight</label>
            <input
              onChange={this.handleInputChange}
              placeholder="Molecular Weight"
              value={this.state.updatedPost.mw}
              name="mw"
            />
            <label for="class">Class</label>
            <input
              onChange={this.handleInputChange}
              placeholder="Class"
              value={this.state.updatedPost.class}
              name="class"
            />
            <label for="superclass">Super Class</label>
            <input
              onChange={this.handleInputChange}
              placeholder="Super Class"
              value={this.state.updatedPost.superclass}
              name="superclass"
            />
            <label for="rotateable_bond_count">Rotateable Bond Count</label>
            <input
              onChange={this.handleInputChange}
              placeholder="Rotateable Bond Count"
              value={this.state.updatedPost.rotateableBondCount}
              name="rotateable_bond_count"
            />
            <label for="complexity">Complexity</label>
            <input
              onChange={this.handleInputChange}
              placeholder="Complexity"
              value={this.state.updatedPost.complexity}
              name="complexity"
            />
            <button className="submit-btn" onClick={this.showEditForm}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Drug;
