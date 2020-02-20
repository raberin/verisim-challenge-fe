import React, { Component } from "react";
import "./DrugForm.css";

class DrugForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drug: {
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

  addDrug = event => {
    event.preventDefault();
    // Add drug to db and reset state after
    this.props.addDrug(this.state.drug);
    this.setState({
      drug: {
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
    this.props.history.push(`/`);
  };

  handleInputChange = e => {
    this.setState({
      drug: {
        ...this.state.drug,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="DrugFormWrapper">
        <form className="DrugForm" onSubmit={this.addDrug}>
          <label for="name">Name</label>
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.drug.name}
            name="name"
          />
          <label for="iupac_name">IUPAC Name</label>
          <input
            onChange={this.handleInputChange}
            placeholder="IUPAC Name"
            value={this.state.drug.iupac_name}
            name="iupac_name"
          />
          <label for="smiles">SMILES</label>
          <input
            onChange={this.handleInputChange}
            placeholder="SMILES"
            value={this.state.drug.smiles}
            name="smiles"
          />
          <label for="molecular_formula">Molecular Formula</label>
          <input
            onChange={this.handleInputChange}
            placeholder="Molecular Formula"
            value={this.state.drug.molecularFormula}
            name="molecular_formula"
          />
          <label for="cas_number">CAS Number</label>
          <input
            onChange={this.handleInputChange}
            placeholder="CAS Number"
            value={this.state.drug.casNumber}
            name="cas_number"
          />
          <label for="mw">Molecular Weight</label>
          <input
            onChange={this.handleInputChange}
            placeholder="Molecular Weight"
            value={this.state.drug.mw}
            name="mw"
          />
          <label for="class">Class</label>
          <input
            onChange={this.handleInputChange}
            placeholder="Class"
            value={this.state.drug.class}
            name="class"
          />
          <label for="superclass">Super Class</label>
          <input
            onChange={this.handleInputChange}
            placeholder="Super Class"
            value={this.state.drug.superclass}
            name="superclass"
          />
          <label for="rotateable_bond_count">Rotateable Bond Count</label>
          <input
            onChange={this.handleInputChange}
            placeholder="Rotateable Bond Count"
            value={this.state.drug.rotateableBondCount}
            name="rotateable_bond_count"
          />
          <label for="complexity">Complexity</label>
          <input
            onChange={this.handleInputChange}
            placeholder="Complexity"
            value={this.state.drug.complexity}
            name="complexity"
          />
          <button className="formSubmit" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default DrugForm;
