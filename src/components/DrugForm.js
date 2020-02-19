import React, { Component } from "react";

class DrugForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drug: {
        name: "",
        iupac_name: "",
        smiles: "",
        molecularFormula: "",
        casNumber: "",
        mw: "",
        class: "",
        superclass: "",
        rotateableBondCount: "",
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
        molecularFormula: "",
        casNumber: "",
        mw: "",
        class: "",
        superclass: "",
        rotateableBondCount: "",
        complexity: ""
      }
    });
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
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.drug.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="IUPAC Name"
            value={this.state.drug.iupac_name}
            name="iupac_name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="SMILES"
            value={this.state.drug.smiles}
            name="smiles"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Molecular Formula"
            value={this.state.drug.molecularFormula}
            name="molecularFormula"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="CAS Number"
            value={this.state.drug.casNumber}
            name="casNumber"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Molecular Weight"
            value={this.state.drug.mw}
            name="mw"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Class"
            value={this.state.drug.class}
            name="class"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Super Class"
            value={this.state.drug.superclass}
            name="superclass"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Rotateable Bond Count"
            value={this.state.drug.rotateableBondCount}
            name="rotateableBondCount"
          />
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
