import React from "react";
import "./preview.css";

const Preview = ({ previewdata }) => {
  
  return (
    <div className="preview">
    
      <h1>PREVIEW</h1>
      <p>Name:  {previewdata.firstname} {previewdata.lastname}</p>
      <p>Company:  {previewdata.company}</p>
      <p>Email:  {previewdata.email}</p>
      <p>Address:  {previewdata.address} </p>
      <p>City:  {previewdata.city}</p>
      <p>State:  {previewdata.state}</p>
    </div>
  );
};

export default Preview;
