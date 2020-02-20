import React from "react";
import axios from "axios";

import "./Drugs.css";

const Drug = props => {
  const deleteDrug = () => {
    axios
      .delete(`http://localhost:5000/api/drugs/${props.id}`)
      .then(res => {
        console.log(res);
        props.fetchDrugs();
        alert(`${props.name} has been deleted!`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="drugCard">
      <div className="drugButtons">
        <span onClick={deleteDrug}>X</span>
      </div>
      <h3>{props.name}</h3>
      <p>Molecular Formula: {props.molecular_formula}</p>
      <p>IUPAC: {props.iupac}</p>
      <p>SMILES: {props.smiles}</p>
      <p>Molecular Weight: {props.mw}</p>
    </div>
  );
};

export default Drug;
