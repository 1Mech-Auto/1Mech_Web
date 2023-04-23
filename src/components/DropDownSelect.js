import React from 'react'

const DropDownSelect = ({ label, select, option }) => {
  return (
    <div className="text-sm grid gap-2">
      <label>{label}</label>
      <select className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize">
        {select && <option>{select}</option>}
        <option>{option}</option>
      </select>
    </div>
  );
};

export default DropDownSelect