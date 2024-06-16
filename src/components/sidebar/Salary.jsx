import React from "react";
import InputField from "../InputField";

const Salary = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Gaji</h4>

      <div>
        <InputField
          handleChange={handleChange}
          value={0}
          title="Any"
          name="salary"
        />

        <InputField
          handleChange={handleChange}
          value={5}
          title="Di atas Rp 5.000.000,00"
          name="salary"
        />

        <InputField
          handleChange={handleChange}
          value={8}
          title="Di atas Rp 8.000.000,00"
          name="salary"
        />

        <InputField
          handleChange={handleChange}
          value={10}
          title="Di atas Rp 10.000.000,00"
          name="salary"
        />

        <InputField
          handleChange={handleChange}
          value={12}
          title="Di atas Rp 12.000.000,00"
          name="salary"
        />
      </div>
    </div>
  );
};

export default Salary;
