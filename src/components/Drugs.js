import React, { Component } from "react";
import "./Drugs.css";

import Drug from "./Drug.js";

class Drugs extends Component {

  render() {
    return (
      <div className="Drugs">
        <h1>Drugs List</h1>
        <div className="drugsList">
          {this.props.drugs.map(drug => {
            return (
              <Drug
                name={drug.name}
                id={drug.id}
                iupac={drug.iupac_name}
                formula={drug.molecular_formula}
                smiles={drug.smiles}
                mw={drug.mw}
                key={drug.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Drugs;
