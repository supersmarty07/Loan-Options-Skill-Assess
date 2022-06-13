import React from "react";
import RowTable from "./RowTable";
import TableHead from "./TableHead";

const DataTable = ({ props }) => {
  const obj = Array.from(props);
  console.log(obj);
  return (
    <>
      <table className="table">
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {obj.map((item, i) => (
            <RowTable key={i} props={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
