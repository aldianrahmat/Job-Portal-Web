import { Input } from "postcss";
import React from "react";
import InputField from "../InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Lokasi</h4>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark">All</span>
        </label>
        <InputField
          handleChange={handleChange}
          value="Jakarta Selatan"
          title="Jakarta Selatan"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="Jakarta Pusat"
          title="Jakarta Pusat"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="Jakarta Utara"
          title="Jakarta Utara"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="Jakarta Timur"
          title="Jakarta Timur"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="Jakarta Barat"
          title="Jakarta Barat"
          name="location"
        />
      </div>
    </div>
  );
};

export default Location;
