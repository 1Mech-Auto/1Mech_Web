import React from 'react'

const VehicleInput = ({ label }) => {
  return (
    <div className="text-sm grid gap-2">
      <label>{label}</label>
      <input
        placeholder={label}
        className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
      />
    </div>
  );
};

export default VehicleInput