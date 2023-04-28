import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
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
  const [enable, setEnable] = useState(true);
  const [enable2, setEnable2] = useState(false);
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
        enabled={enable}
        setEnabled={setEnable}
        name="one"
      />
      {enable ? (
        ""
      ) : (
        <div className="block">
          <p className="text-xs text-gray-400 font-normal mb-2">
            Enter the details of the person who brought the car on behalf of the
            client.
          </p>
          <div className="grid sm:grid-cols-4 gap-4">
            <div className="text-sm grid gap-2">
              <label>Full Name</label>
              <input
                type="text"
                className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
                placeholder="Full Name"
              />
            </div>
            <div className="text-sm grid gap-2">
              <label>Phone Number</label>
              <input
                type="tel"
                className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
                placeholder="Phone Number"
              />
            </div>
            <div className="text-sm grid gap-2">
              <label>Email Address</label>
              <input
                type="email"
                className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
                placeholder="Email Address"
              />
            </div>
            <div className="text-sm grid gap-2">
              <label>ID Number</label>
              <input
                type="text"
                className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
                placeholder="ID Number"
              />
            </div>
          </div>
        </div>
      )}
      <hr />
      <div className="text-sm grid gap-2">
        <div className="grid md:grid-cols-4 gap-6 py-4">
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
      <ToggleInputForm
        label={"Repair cost covered by insurance"}
        enabled={enable2}
        setEnabled={setEnable2}
        name="two"
      />
      {enable2 && (
        <div className="text-sm grid gap-2">
          <label>Insurance Company</label>
          <select
            className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
            // value={user}
          >
            <option>Select Insurance Company</option>
            <option>All clients</option>
          </select>
        </div>
      )}
    </form>
  );
};
const Form2 = () => {
  const [enable, setEnable] = useState({ three: true, four: false });

  return (
    <form className="px-4 pb-4 font-medium">
      <h2 className="text-sm">Vehicle parts check.</h2>
      <div className="grid md:grid-cols-3 my-4 gap-y-8">
        <ToggleInputForm
          label={"Wiper"}
          enable={enable.three}
          setEnable={setEnable}
          name="three"
        />
        <ToggleInputForm
          label={"Ext/Mirrors P/M"}
          enable={enable.four}
          setEnable={setEnable}
          name="four"
        />
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

const NewVehicleForm = ({ open, setOpen }) => {
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
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-60 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 md:w-full lg:w-5/6 ">
                <div className="border bg-white rounded-lg capitalize font-medium text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
                    <h3>Job</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-gray-500"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <p className="text-md my-5 normal-case px-4">
                    Create a new Job
                  </p>
                  <div className="px-4 pb-2 my-2">
                    <ul className="grid grid-cols-4 items-center justify-between text-blue-500 text-sm">
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NewVehicleForm;
