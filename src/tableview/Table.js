import React from "react";
import "./Table.css"
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Table = ({ pre }) => {
  return (
    <div className="tableview">
   
      <table id="formdata">
        <thead>
          <tr>
            <th>company Name</th>
            <th>Lastname</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {pre.map((gridview) => (
            <tr>
              <td>
                {gridview.firstname},{gridview.company}
              </td>
              <td>{gridview.lastname}</td>
              <td>
                {gridview.address},{gridview.city},{gridview.state}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{float :"left"}}>
        { pre.length !==0 ? 
        <ReactHTMLTableToExcel
          table="formdata"
          filename="dataReport"
          sheet="sheet"
          buttonText="Export to CSV"
        /> : ""}
      </div>
    </div>
  );
};

export default Table;
