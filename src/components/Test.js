import React from "react";
import Image from "next/image";
import fuelImage from "../../public/fuel.svg";
const Test = () => {
  return (
    <div>
      <Image src={fuelImage} alt="test" />
      <input
        type="range"
        min="-36"
        max="82"
        value="82"
        name="fuel_level"
        class="fuel-slider valid"
        aria-invalid="false"
      />
    </div>
  );
};

export default Test;
