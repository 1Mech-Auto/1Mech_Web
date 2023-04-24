import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const ToggleInputForm = ({ label }) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex items-center gap-4 mb-4 sm:mb-0">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-white"
        } relative inline-flex h-7 w-14 items-center rounded-full border`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-8 bg-white" : "translate-x-1 bg-gray-300"
          } inline-block h-5 w-5 transform rounded-full transition`}
        />
      </Switch>
      <label className="text-gray-400">{label}</label>

    </div>
  );
};

export default ToggleInputForm;
