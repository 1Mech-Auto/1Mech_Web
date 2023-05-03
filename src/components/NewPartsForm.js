import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import ToggleInputForm from "./ToggleInputForm";

const NewPartsForm = ({parts,setParts}) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={parts} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setParts}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="border bg-white rounded-lg capitalize font-medium text-[#364a63] pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
                    <h3>Add Part</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#364a63]"
                      onClick={() => setParts(false)}
                    />
                  </div>
                  <form className="mt-3 grid gap-8 px-4 pb-4">
                    <p className="text-sm text-gray-500">
                      Add a part to check on vehicle check in and check out
                    </p>
                    <div className="text-sm grid gap-2">
                      <label>Part Name</label>
                      <input
                        name="title"
                        type="text"
                        //   value={title}
                        //   onChange={updateCampaignDetails}
                        className="w-full outline-none border-2 rounded-md py-2 pl-3 placeholder:text-gray-300"
                        placeholder="Part Name"
                      />
                    </div>
                    <ToggleInputForm label={"Show input field when checked"} />
                    <div className="text-sm grid gap-2">
                      <label>Input Name</label>
                      <input
                        name="title"
                        type="text"
                        //   value={title}
                        //   onChange={updateCampaignDetails}
                        className="w-full outline-none border-2 rounded-md py-2 pl-3 placeholder:text-gray-300"
                        placeholder="Input Name"
                      />
                    </div>
                  </form>
                  <div className="flex mt-auto border py-4 bg-gray-200 justify-end gap-2 px-4">
                    <article
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                      onClick={() => setParts(false)}
                    >
                      <MdOutlineCancel />
                      <p className="text-xs">cancel</p>
                    </article>
                    <article className="flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer">
                      <BsShieldCheck />
                      <p className="text-xs">Add Part</p>
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

export default NewPartsForm;
