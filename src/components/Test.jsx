import React, { useState } from "react";
import Image from "next/image";
import fuel from '../../public/fuel.svg' 
import {ReactComponent as Fuel} from '../../public/fuel.svg'

const Test = () => {
  const [range, setRange] = useState("82");

  console.log(range);
  return (
    <div>
      <Image src={fuel} alt="fuel" />
      
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

export default Test;
