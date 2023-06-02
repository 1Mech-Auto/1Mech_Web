import React, { useState } from "react";
import MySvg from "./MySvg";

const Fuel = () => {
  const [range, setRange] = useState("82");

  return (
    <div>
      <MySvg range={range} />

      <input
        type="range"
        min="-36"
        max="82"
        value={range}
        onChange={(e) => {
          setRange(e.target.value);
        }}
        name="fuel_level"
        className="w-full"
        aria-invalid="false"
      />
    </div>
  );
};

export default Fuel;
