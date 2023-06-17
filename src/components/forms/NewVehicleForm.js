import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import Test from "../Test";
import DropDownSelect from "../DropDownSelect";
import VehicleInput from "../VehicleInput";
import ToggleInputForm from "../ToggleInputForm";
import DatePicker from "../DatePicker";
import { useFormContext } from "@/context/form_context";
import VehicleRequiredPrompt from "../VehicleRequiredPrompt";

const Form1 = () => {
  const {
    newVehicleForm: { client, toggle1, toggle2 },
    newVehicleData,
  } = useFormContext();
  return (
    <form className="grid gap-4 px-4 pb-4">
      <div className="text-sm grid gap-2">
        <label>Client</label>
        <select
          name="client"
          className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
          value={client}
          onChange={newVehicleData}
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
        id="toggle1"
        checked={toggle1}
        onChange={(newEnabled) => newVehicleData("toggle1", newEnabled)}
      />
      {toggle1 ? (
        ""
      ) : (
        <div className="block">
          <p className="text-xs text-[#8094ae] font-normal mb-2">
            Enter the details of the person who brought the car on behalf of the
            client.
          </p>
          <div className="grid sm:grid-cols-4 gap-4">
            <div className="text-sm grid gap-2">
              <label>Full Name</label>
              <input
                type="text"
                className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                placeholder="Full Name"
              />
            </div>
            <div className="text-sm grid gap-2">
              <label>Phone Number</label>
              <input
                type="tel"
                className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                placeholder="Phone Number"
              />
            </div>
            <div className="text-sm grid gap-2">
              <label>Email Address</label>
              <input
                type="email"
                className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                placeholder="Email Address"
              />
            </div>
            <div className="text-sm grid gap-2">
              <label>ID Number</label>
              <input
                type="text"
                className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
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
          <div className="text-sm grid gap-2 relative">
            <VehicleRequiredPrompt />
            <label>Color</label>
            <input
              type="color"
              placeholder="Color"
              className="outline-none border w-full rounded-md h-10 py-1.5 px-2 font-medium capitalize"
            />
          </div>
          <DropDownSelect label={"Car Year"} option={"1973"} />
          <VehicleInput label={"Insurance Company"} />
          <DatePicker label={"Date IN"} />
          <div className="text-sm grid gap-2">
            <label>Time IN</label>
            <input
              type="time"
              className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
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
          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
          placeholder="Towing Details / Notes"
        />
      </div>
      <hr />
      <ToggleInputForm
        label={"Repair cost covered by insurance"}
        id="toggle2"
        checked={toggle2}
        onChange={(newEnabled) => newVehicleData("toggle2", newEnabled)}
      />
      {toggle2 && (
        <div className="text-sm grid gap-2">
          <label>Insurance Company</label>
          <select
            className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
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
  const {
    toggleStates: {
      toggle1,
      toggle2,
      toggle3,
      toggle4,
      toggle5,
      toggle6,
      toggle7,
      toggle8,
      toggle9,
      toggle10,
      toggle11,
      toggle12,
      toggle13,
      toggle14,
      toggle15,
      toggle16,
      toggle17,
      toggle18,
      toggle19,
      toggle20,
    },
    handleToggleChange,
  } = useFormContext();

  return (
    <form className="px-4 pb-4 font-medium">
      <h2 className="text-sm">Vehicle parts check.</h2>
      <div className="grid md:grid-cols-3 my-4 gap-y-8">
        <ToggleInputForm
          label={"Wiper"}
          id="toggle1"
          checked={toggle1}
          onChange={(newEnabled) => handleToggleChange("toggle1", newEnabled)}
        />
        <ToggleInputForm
          label={"Ext/Mirrors P/M"}
          id="toggle2"
          checked={toggle2}
          onChange={(newEnabled) => handleToggleChange("toggle2", newEnabled)}
        />
        <ToggleInputForm
          label={"Ext/Badge/Stickers"}
          id="toggle3"
          checked={toggle3}
          onChange={(newEnabled) => handleToggleChange("toggle3", newEnabled)}
        />
        <ToggleInputForm
          label={"Spare Wheel"}
          id="toggle4"
          checked={toggle4}
          onChange={(newEnabled) => handleToggleChange("toggle5", newEnabled)}
        />
        <ToggleInputForm
          label={"Door Locks"}
          id="toggle5"
          checked={toggle5}
          onChange={(newEnabled) => handleToggleChange("toggle5", newEnabled)}
        />
        <ToggleInputForm
          label={"Fire Extinguisher"}
          id="toggle6"
          checked={toggle6}
          onChange={(newEnabled) => handleToggleChange("toggle6", newEnabled)}
        />
        <ToggleInputForm
          label={"Fuel Tank Cap"}
          id="toggle7"
          checked={toggle7}
          onChange={(newEnabled) => handleToggleChange("toggle7", newEnabled)}
        />
        <ToggleInputForm
          label={"Fuel Tank Lid Lock"}
          id="toggle8"
          checked={toggle8}
          onChange={(newEnabled) => handleToggleChange("toggle8", newEnabled)}
        />
        <ToggleInputForm
          label={"Relay"}
          id="toggle9"
          checked={toggle9}
          onChange={(newEnabled) => handleToggleChange("toggle9", newEnabled)}
        />
        <ToggleInputForm
          label={"Horns"}
          id="toggle10"
          checked={toggle10}
          onChange={(newEnabled) => handleToggleChange("toggle10", newEnabled)}
        />
        <ToggleInputForm
          label={"Oil Filter Cap"}
          id="toggle11"
          checked={toggle11}
          onChange={(newEnabled) => handleToggleChange("toggle11", newEnabled)}
        />
        <ToggleInputForm
          label={"Radiator Cap"}
          id="toggle12"
          checked={toggle12}
          onChange={(newEnabled) => handleToggleChange("toggle12", newEnabled)}
        />
        <ToggleInputForm
          label={"Battery MK"}
          id="toggle13"
          checked={toggle13}
          onChange={(newEnabled) => handleToggleChange("toggle13", newEnabled)}
        />
        <ToggleInputForm
          label={"Arial Auto/MAN"}
          id="toggle14"
          checked={toggle14}
          onChange={(newEnabled) => handleToggleChange("toggle14", newEnabled)}
        />
        <ToggleInputForm
          label={"Seat Belts"}
          id="toggle15"
          checked={toggle15}
          onChange={(newEnabled) => handleToggleChange("toggle15", newEnabled)}
        />
        <ToggleInputForm
          label={"Radio Speaker"}
          id="toggle16"
          checked={toggle16}
          onChange={(newEnabled) => handleToggleChange("toggle16", newEnabled)}
        />
        <ToggleInputForm
          label={"Rear View Mirror"}
          id="toggle17"
          checked={toggle17}
          onChange={(newEnabled) => handleToggleChange("toggle17", newEnabled)}
        />
        <ToggleInputForm
          label={"W/Spanner"}
          id="toggle18"
          checked={toggle18}
          onChange={(newEnabled) => handleToggleChange("toggle18", newEnabled)}
        />
        <ToggleInputForm
          label={"W/Triangle"}
          id="toggle19"
          checked={toggle19}
          onChange={(newEnabled) => handleToggleChange("toggle19", newEnabled)}
        />
        <ToggleInputForm
          label={"Boot Mats"}
          id="toggle20"
          checked={toggle20}
          onChange={(newEnabled) => handleToggleChange("toggle20", newEnabled)}
        />
      </div>
      <hr />
      <div className="grid gap-2 mt-5">
        <label>Bookings In Notes</label>
        <textarea className="outline-none border relative text-[#8094ae]  min-h-[8em] px-2 rounded-md font-medium" />
        <small className="text-[#8094ae] italic">
          Serial numbers, part description/condition, additional parts etc
        </small>
      </div>
    </form>
  );
};
const Form3 = () => {
  return (
    <div className="min-h-[50vh] px-4 border-2 border-transparent border-b-gray-300 mb-2">
      <hr />
      <div className="text-xs text-center font-normal my-3">
        Mark for dents and scratches. Use{" "}
        <div className="w-[10px] h-[10px] rounded-full bg-[#ff0000] inline-block"></div>{" "}
        Red color for dents and{" "}
        <div className="w-[10px] h-[10px] rounded-full bg-[#1418FF] inline-block"></div>{" "}
        Blue color for scratches. This can not be updated once saved.
      </div>
      <div className="grid min-h-[35vh]">
        <div className="w-4/6 min-h-[25vh] mx-auto border-2 rounded-lg border-gray-300"></div>
      </div>
      <hr className="mt-4" />
      <div className="text-xs italic font-normal text-center my-4">
        Dents marking selected
      </div>
    </div>
  );
};
const Form4 = () => {
  return (
    <form className="px-4 grid grid-cols-[1.7fr,1fr] gap-8 font-medium">
      <div>
        <div className="grid gap-2">
          <label>Pre Accident / Other Defects</label>
          <textarea className="outline-none border relative text-[#8094ae]  min-h-[8em] px-2 rounded-md font-medium" />
        </div>
        <div className="flex flex-col gap-3 my-4">
          <label>Reason Why Vehicle Is Here / Owners Instructions</label>
          <input
            className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
            placeholder="Work Requested / Owners Instructions"
          />
          <input
            className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
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
  { component: <Form4 /> },
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
                      <li className="relative cursor-pointer">
                        <p>1. CLIENT & VEHICLE DETAIL</p>
                        <div
                          className={`h-[2px] bg-[#0971fe] -bottom-[0.7em] absolute block w-full`}
                        ></div>
                      </li>
                      <li className="relative cursor-pointer">
                        <p>2. VEHICLE CHECK IN</p>
                        <div
                          className={`${
                            nextPage === 1 &&
                            `h-[2px] bg-[#0971fe] -bottom-[0.7em] absolute block w-full`
                          } `}
                        ></div>
                      </li>
                      <li className="relative cursor-pointer">
                        <p>3. DENTS AND SCRATCHES</p>
                        <div
                          className={`${
                            nextPage === 2 &&
                            `h-[2px] bg-[#0971fe] -bottom-[0.7em] absolute block w-full`
                          } `}
                        ></div>
                      </li>
                      <li className="relative cursor-pointer">
                        <p>4. DEFECTS & FUEL LEVEL</p>
                        <div
                          className={`${
                            nextPage === 3 &&
                            `h-[2px] bg-[#0971fe] -bottom-[0.7em] absolute block w-full`
                          } `}
                        ></div>
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
