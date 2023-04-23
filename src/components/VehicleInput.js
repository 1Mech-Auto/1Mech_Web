import React from 'react'

const VehicleInput = ({ label }) => {
  return (
    <div className="text-sm grid gap-2">
      <label>{label}</label>
      <input
        placeholder={label}
        className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
      />
    </div>
  );
};

export default VehicleInput