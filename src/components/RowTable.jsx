import React from "react";

const RowTable = ({ props }) => {
  return (
    <tr>
      <td>{props.name || "N/A"}</td>
      <td>{props.country || "N/A"}</td>
      <td>{props["state-province"] || "N/A"}</td>
      <td>{props["web_pages"] || "N/A"}</td>
      <td>{props.domains || "N/A"}</td>
      <td>{props["alpha_two_code"] || "N/A"}</td>
    </tr>
  );
};

export default RowTable;
