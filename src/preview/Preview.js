import React from "react";
import "./preview.css";

const Preview = ({ previewdata }) => {
  
  return (
    <div className="preview">
      <h1>PREVIEW</h1>
      <ul>
      <li>Name: {previewdata.firstname} {previewdata.lastname}</li>
      <li>Company: {previewdata.company}</li>
      <li>Email: {previewdata.email}</li>
      <li>Address: {previewdata.address} </li>
      <li>City: {previewdata.city}</li>
      <li>State: {previewdata.state}</li>
      </ul>
    </div>
  );
};

export default Preview;
