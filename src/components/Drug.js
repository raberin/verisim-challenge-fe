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
        <span className="x-button" onClick={deleteDrug}>
          X
        </span>
      </div>
      <div className="drugContent">
        <h3>{props.name}</h3>
        <p>Molecular Formula: {props.formula}</p>
        <p>IUPAC: {props.iupac}</p>
        <p>SMILES: {props.smiles}</p>
        <p>Molecular Weight: {props.mw}</p>
      </div>
    </div>
  );
};

export default Drug;
