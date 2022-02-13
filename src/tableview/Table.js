import React from "react";
import "./Table.css"
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Table = ({ pre }) => {
  return (
    <div className="tableview">
   
      <table id="formdata">
        <thead>
          <tr>
            <th>Name(company)</th>
            <th>Lastname</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {pre.map((tableview) => (
            <tr>
              <td>
                {tableview.firstname},{tableview.company}
              </td>
              <td>{tableview.lastname}</td>
              <td>
                {tableview.address},{tableview.city},{tableview.state}
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
