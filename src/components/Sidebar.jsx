import React from "react";
import Location from "./sidebar/Location";
import Salary from "./sidebar/Salary";
import EmploymentType from "./sidebar/EmploymentType";

const Sidebar = ({ handleChange }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} />
      <EmploymentType handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
