import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";

export default function NewTeamMemberForm({open,setOpen}) {
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="border bg-white rounded-lg capitalize font-bold text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
                    <h3>Create Team Member</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-gray-500"
                      onClick={() => {
                        setOpen(false);
                      }}
                    />
                  </div>
                  <p className="text-xs font-semibold mt-6 normal-case px-4">
                    Create a team member account
                  </p>
                  <form className="mt-3 grid gap-8 px-4 pb-4">
                    <section className="grid grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2">
                        <label>First Name</label>
                        <input
                          name="title"
                          type="text"
                          //   value={title}
                          //   onChange={updateCampaignDetails}
                          className="w-full outline-none border-2 rounded-md py-2 pl-3 placeholder:text-gray-300"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Last Name</label>
                        <input
                          name="title"
                          type="text"
                          //   value={title}
                          //   onChange={updateCampaignDetails}
                          className="w-full outline-none border-2 rounded-md py-2 pl-3 placeholder:text-gray-300"
                          placeholder="Last Name"
                        />
                      </div>
                    </section>
                    <section className="grid grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2">
                        <label>Phone Number</label>
                        <input
                          name="telephone"
                          type="tel"
                          //   value={title}
                          //   onChange={updateCampaignDetails}
                          className="w-full outline-none border-2 rounded-md py-2 pl-3 placeholder:text-gray-300"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Email Address</label>
                        <input
                          name="email"
                          type="email"
                          //   value={title}
                          //   onChange={updateCampaignDetails}
                          className="w-full outline-none border-2 rounded-md py-2 pl-3 placeholder:text-gray-300"
                          placeholder="Email Address"
                        />
                      </div>
                    </section>
                    <div className="text-sm grid gap-2">
                      <label>Role</label>
                      <select
                        className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
                        // value={user}
                      >
                        <option>Staff</option>
                        <option>All clients</option>
                      </select>
                      <p className="text-xs text-gray-400 normal-case italic">
                        Owner has full access of the system. Manager have full
                        access but has no delete permissions. Booking Manager
                        books vehicles IN and OUT. Inventory Manager has access
                        to inventory module. Staff have no access to the system.
                      </p>
                    </div>
                    <section className="grid grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2">
                        <label>Type</label>
                        <select
                          className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
                          // value={user}
                        >
                          <option>Full Time</option>
                          <option>All clients</option>
                        </select>
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Status</label>
                        <select
                          className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
                          // value={user}
                        >
                          <option>Active</option>
                          <option>All clients</option>
                        </select>
                      </div>
                    </section>
                    <div className="text-sm grid gap-2">
                      <label>Address</label>
                      <select
                        className="outline-none border-2 text-gray-400 rounded-md py-2 px-2 font-medium capitalize"
                        // value={user}
                      >
                        <option>Select State</option>
                        <option>All clients</option>
                      </select>
                    </div>
                  </form>
                  <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                    <article
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <MdOutlineCancel />
                      <p className="text-xs">cancel</p>
                    </article>
                    <article
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
                      onClick={() => {
                        addNewCampaign();
                        toggleOfferPopup();
                      }}
                    >
                      <BsShieldCheck />
                      <p className="text-xs">Create Member</p>
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
}
