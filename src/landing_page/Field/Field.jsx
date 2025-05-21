import React from "react";
import FieldTable from "./FieldTable";
import BodyHeader from '../BodyHeader';

function Field() {
  return (
    <div>
      <BodyHeader text="All Field" btntext="Create Field" link="/createfield" />
      <FieldTable />
    </div>
  );
}

export default Field;
