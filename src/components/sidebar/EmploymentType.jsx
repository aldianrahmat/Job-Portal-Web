import React from "react";
import InputField from "../InputField";

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Tipe Pekerjaan</h4>
      <div>
        <InputField
          handleChange={handleChange}
          value=""
          title="Any"
          name="employment"
        />
        <InputField
          handleChange={handleChange}
          value="full-time"
          title="Full-time"
          name="employment"
        />
        <InputField
          handleChange={handleChange}
          value="magang"
          title="Magang"
          name="employment"
        />
        <InputField
          handleChange={handleChange}
          value="part-time"
          title="Part-time"
          name="employment"
        />
      </div>
    </div>
  );
};

export default EmploymentType;
