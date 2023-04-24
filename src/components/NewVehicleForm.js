import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import Test from "./Test";
import DropDownSelect from "./DropDownSelect";
import VehicleInput from "./VehicleInput";
import ToggleInputForm from "./ToggleInputForm";
import DatePicker from "./DatePicker";
import { useFormContext } from "@/context/form_context";

const Form1 = () => {
  return (
    <form className="grid gap-4 px-4 pb-4">
      <div className="text-sm grid gap-2">
        <label>Client</label>
        <select
          className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
          // value={user}
        >
          <option>Select Client</option>
          <option>All clients</option>
          <option>selected clients</option>
          <option>All team members</option>
          <option>selected team members</option>
          <option>enter number manually</option>
          <option>filtered clients by car make / model</option>
        </select>
      </div>
      <ToggleInputForm
        label={"The vehicle was brought in by the client himself/herself"}
      />
      <hr />
      <div className="text-sm grid gap-2">
        <div className="grid sm:grid-cols-4 gap-6 py-4">
          <DropDownSelect
            label={"Make"}
            select={"Select Make"}
            option={"Toyota"}
          />
          <DropDownSelect
            label={"Model"}
            select={"Select Model"}
            option={"Model S"}
          />
          <VehicleInput label={"Registration Number"} />
          <VehicleInput label={"VIN / Chasis No"} />
          <VehicleInput label={"Engine No"} />
          <VehicleInput label={"Milleage In"} />
          <DropDownSelect label={"Milleage Unit"} option={"Kilometers"} />
          <VehicleInput label={"Color"} />
          <DropDownSelect label={"Car Year"} option={"1973"} />
          <VehicleInput label={"Insurance Company"} />
          <DatePicker label={"Date IN"} />
          <div className="text-sm grid gap-2">
            <label>Time IN</label>
            <input
              type="time"
              className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
            />
          </div>
          <DropDownSelect label={"Status"} option={"In Progress"} />
          <DatePicker label={"Start Date"} />
          <DatePicker label={"Expected Completion Date"} />
          <DatePicker label={"Road Test"} option={"None"} />
        </div>
        <label>Towing Details / Notes</label>
        <input
          name="title"
          type="text"
          // value={title}
          //   onChange={updateCampaignDetails}
          className="w-full outline-none border-2 rounded-md py-2 pl-3 placeholder:text-gray-400"
          placeholder="Towing Details / Notes"
        />
      </div>
      <hr />
      <ToggleInputForm label={"Repair cost covered by insurance"} />
    </form>
  );
};
const Form2 = () => {
  return (
    <form className="px-4 font-medium">
      <h2 className="text-sm">Vehicle parts check.</h2>
      <div className="grid sm:grid-cols-3 my-4 gap-y-8">
        <ToggleInputForm label={"Wiper"} />
        <ToggleInputForm label={"Ext/Mirrors P/M"} />
        <ToggleInputForm label={"Ext/Badge/Stickers"} />
        <ToggleInputForm label={"Spare Wheel"} />
        <ToggleInputForm label={"Door Locks"} />
        <ToggleInputForm label={"Fire Extinguisher"} />
        <ToggleInputForm label={"Fuel Tank Cap"} />
        <ToggleInputForm label={"Fuel Tank Lid Lock"} />
        <ToggleInputForm label={"Relay"} />
        <ToggleInputForm label={"Horns"} />
        <ToggleInputForm label={"Oil Filter Cap"} />
        <ToggleInputForm label={"Radiator Cap"} />
        <ToggleInputForm label={"Battery MK"} />
        <ToggleInputForm label={"Arial Auto/MAN"} />
        <ToggleInputForm label={"Seat Belts"} />
        <ToggleInputForm label={"Radio Speaker"} />
        <ToggleInputForm label={"Rear View Mirror"} />
        <ToggleInputForm label={"W/Spanner"} />
        <ToggleInputForm label={"W/Triangle"} />
        <ToggleInputForm label={"Boot Mats"} />
      </div>
      <hr />
      <div className="grid gap-2 mt-5">
        <label>Bookings In Notes</label>
        <textarea className="outline-none border-2 relative text-gray-400  min-h-[8em] px-2 rounded-md font-medium" />
        <small className="text-gray-400 italic">
          Serial numbers, part description/condition, additional parts etc
        </small>
      </div>
    </form>
  );
};
const Form3 = () => {
  return (
    <form className="px-4 grid grid-cols-[1.7fr,1fr] gap-8 font-medium">
      <div>
        <div className="grid gap-2">
          <label>Pre Accident / Other Defects</label>
          <textarea className="outline-none border-2 relative text-gray-400  min-h-[8em] px-2 rounded-md font-medium" />
        </div>
        <div className="flex flex-col gap-3 my-4">
          <label>Work Requested / Owners Instructions</label>
          <input
            className="w-full outline-none border-2 rounded-md py-2 pl-3 placeholder:text-gray-400"
            placeholder="Work Requested / Owners Instructions"
          />
          <input
            className="w-full outline-none border-2 rounded-md py-2 pl-3 placeholder:text-gray-400"
            placeholder="Work Requested / Owners Instructions"
          />
          <div className="flex p-2 bg-blue-100 rounded-md text-blue-500 items-center gap-3 mr-auto">
            <BiPlus />
            <span>Add Item</span>
          </div>
        </div>
      </div>
      <Test />
    </form>
  );
};

const stages = [
  {
    component: <Form1 />,
  },
  { component: <Form2 /> },
  { component: <Form3 /> },
];

const NewVehicleForm = ({ toggleVehicleForm }) => {
  const [nextPage, setNextPage] = useState(0);
  const currentPage = stages[nextPage];

  const handleChangeNext = () => {
    if (nextPage === stages.length - 1) {
      return;
    }
    setNextPage(nextPage + 1);
  };
  const handleChangePrev = () => {
    if (nextPage === 0) {
      return;
    }
    setNextPage(nextPage - 1);
  };

  return (
    <div className="absolute w-full h-full top-0 left-0 z-[1000] rounded-md backdrop-brightness-50">
      <div className="absolute min-w-[90%] min-h-[20%] top-[3%] left-[5%] border bg-white rounded-lg capitalize font-bold text-gray-700 pt-4 flex flex-col">
        <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
          <h3>Job</h3>
          <AiOutlineClose
            className="text-2xl cursor-pointer text-gray-500"
            onClick={toggleVehicleForm}
          />
        </div>
        <p className="text-md font-medium my-5 normal-case px-4">
          Create a new Job
        </p>
        <div className="px-4 pb-2 my-2">
          <ul className="grid grid-cols-4 text-blue-500 mr-24">
            <li className="border-4 border-transparent border-b-blue-500">
              1. CLIENT & VEHICLE DETAIL
            </li>
            <li
              className={`${
                nextPage === 1 &&
                "border-4 border-transparent border-b-blue-500 "
              } `}
            >
              2. VEHICLE CHECK IN
            </li>
            <li
              className={`${
                nextPage === 2 &&
                "border-4 border-transparent border-b-blue-500 "
              }`}
            >
              3. DENTS AND SCRATCHES
            </li>
            <li
              className={`${
                nextPage === 3 &&
                "border-4 border-transparent border-b-blue-500 "
              }`}
            >
              4. DEFECTS & FUEL LEVEL
            </li>
          </ul>
        </div>
        {currentPage.component}
        <div className="flex items-center mt-auto border py-4 bg-gray-200 justify-start gap-4 px-4">
          {nextPage > 0 && (
            <article
              className="flex items-center gap-2 px-4 py-3 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
              onClick={handleChangePrev}
            >
              <p className="text-xs">Prev</p>
            </article>
          )}

          {nextPage !== stages.length - 1 && (
            <article
              className="flex items-center gap-2 px-4 py-3 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
              onClick={handleChangeNext}
            >
              <p className="text-xs">Next</p>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewVehicleForm;
