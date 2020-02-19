import React from "react";

import "./Drugs.css";

const Drug = props => {
  return (
    <div className="drugCard">
      <h3>{props.name}</h3>
      <p>Molecular Formular: {props.molecular_formula}</p>
      <p>IUPAC: {props.iupac}</p>
      <p>SMILES: {props.smiles}</p>
      <p>Molecular Weight: {props.mw}</p>
    </div>
  );
};

export default Drug;
