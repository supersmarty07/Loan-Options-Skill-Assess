import React from "react";

const TableHead = () => {
  return (
    <>
      <tr>
        <th>Name</th>
        <th>Country</th>
        <th>State</th>
        <th>Webpages</th>
        <th>Domains</th>
        <th className="text-nowrap">Alpha Code</th>
      </tr>
    </>
  );
};

export default TableHead;
