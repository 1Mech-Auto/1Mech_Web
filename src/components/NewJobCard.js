import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import DatePicker from "./DatePicker";

const NewJobCard = ({ jobCard, setJobCard }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={jobCard} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setJobCard}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 md:w-full lg:w-4/6 ">
                <div className="border bg-white rounded-lg capitalize text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-[#8094ae] flex justify-between items-center text-xl font-semibold">
                    <h3>Manage Info</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setJobCard(false)}
                    />
                  </div>
                  <p className="text-sm font-semibold mt-6 normal-case px-6">
                    Create a job card.
                  </p>
                  <form className="mt-3 grid gap-8 p-4 px-6 ">
                    <div className="text-sm grid gap-2">
                      <label className="text-md font-semibold">
                        Select Project
                      </label>
                      <select
                        className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                        // value={user}
                      >
                        <option>Select Project</option>
                        <option>All clients</option>
                      </select>
                    </div>
                    <div className="text-sm grid gap-3">
                      <label className="text-md font-semibold">
                        Body Report
                      </label>
                      <input
                        name="quantity"
                        type="text"
                        //   value={title}
                        //   onChange={updateCampaignDetails}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Body Report"
                      />
                      <input
                        name="quantity"
                        type="text"
                        //   value={title}
                        //   onChange={updateCampaignDetails}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Body Report"
                      />
                      <button className="flex items-center gap-2 hover:bg-[#0971fe] bg-[#e4efff] text-[#0971fe]  hover:text-white p-2.5 rounded-md text-sm cursor-pointer font-bold mr-auto">
                        <BiPlus />
                        <span>Add Item</span>
                      </button>
                    </div>
                    <div className="text-sm grid gap-3">
                      <label className="text-md font-semibold">
                        Mechanical Report
                      </label>
                      <input
                        name="quantity"
                        type="text"
                        //   value={title}
                        //   onChange={updateCampaignDetails}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Mechanical Report"
                      />
                      <input
                        name="quantity"
                        type="text"
                        //   value={title}
                        //   onChange={updateCampaignDetails}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Mechanical Report"
                      />
                      <button className="flex items-center gap-2 hover:bg-[#0971fe] bg-[#e4efff] text-[#0971fe]  hover:text-white p-2.5 rounded-md text-sm cursor-pointer font-bold mr-auto">
                        <BiPlus />
                        <span>Add Item</span>
                      </button>
                    </div>
                    <div className="text-sm grid gap-3">
                      <label className="text-md font-semibold">
                        Electrical Report
                      </label>
                      <input
                        name="quantity"
                        type="text"
                        //   value={title}
                        //   onChange={updateCampaignDetails}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Electrical Report"
                      />
                      <input
                        name="quantity"
                        type="text"
                        //   value={title}
                        //   onChange={updateCampaignDetails}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Electrical Report"
                      />
                      <button className="flex items-center gap-2 hover:bg-[#0971fe] bg-[#e4efff] text-[#0971fe]  hover:text-white p-2.5 rounded-md text-sm cursor-pointer font-bold mr-auto">
                        <BiPlus />
                        <span>Add Item</span>
                      </button>
                    </div>
                    <div className="text-sm grid gap-2">
                      <label className="text-md font-semibold">
                        Is this job card approved by the client?
                      </label>
                      <select
                        className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                        // value={user}
                      >
                        <option>Not Yet</option>
                        <option>Yes</option>
                      </select>
                    </div>
                  </form>
                  <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                    <article
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                      onClick={() => setJobCard(false)}
                    >
                      <MdOutlineCancel />
                      <p className="text-xs">cancel</p>
                    </article>
                    <article className="flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer">
                      <BsShieldCheck />
                      <p className="text-xs">Create Job Card</p>
                    </article>
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

export default NewJobCard;
