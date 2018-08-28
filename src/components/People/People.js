import React from "react";
import "./People.css";

const People = props => (
  <div  onClick={props.onClick} className="card">
    <div  className="img-container">
      <img  alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
       
        
      </ul>
    </div>
  </div>
);

export default People;
