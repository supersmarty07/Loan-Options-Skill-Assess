import React from "react";

const Buttons = ({ dataLoad, dataDelete, dataAdd }) => {
  return (
    <div className="d-flex justify-content-between pb-3">
      <a
        className="btn btn-warning d-flex"
        onClick={() => {
          dataLoad(true);
        }}
      >
        Load
      </a>
      <a
        className="btn btn-danger d-flex"
        onClick={() => {
          dataDelete(true);
        }}
      >
        Delete
      </a>
      <a
        className="btn btn-success d-flex"
        onClick={() => {
          dataAdd(true);
        }}
      >
        Add
      </a>
    </div>
  );
};

export default Buttons;
