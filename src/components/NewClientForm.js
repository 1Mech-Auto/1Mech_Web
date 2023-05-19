import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useFormContext } from "@/context/form_context";

export default function NewClientForm({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const {
    clientForm: { names, phone, email, address, gender },
    newClientForm,
    addNewClient,
  } = useFormContext();

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-5/6 sm:my-8 sm:w-full sm:max-w-lg">
                <div className="border bg-white rounded-lg capitalize text-[#8094ae] pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-[#8094ae] flex justify-between items-center text-xl">
                    <h3>Create Client</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-gray-500"
                      onClick={() => {
                        setOpen(false);
                      }}
                    />
                  </div>
                  <p className="text-xs font-semibold mt-6 normal-case px-4">
                    Create a client account
                  </p>
                  <form className="mt-3 grid gap-8 px-4 pb-4 text-[#344357]">
                    <div className="text-sm grid gap-2">
                      <label>Full Name</label>
                      <input
                        name="names"
                        type="text"
                        value={names}
                        onChange={newClientForm}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Full Name"
                      />
                    </div>
                    <section className="grid grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2 relative">
                        <label>Phone Number</label>
                        <input
                          name="phone"
                          type="tel"
                          value={phone}
                          onChange={newClientForm}
                          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Email Address</label>
                        <input
                          name="email"
                          type="email"
                          value={email}
                          onChange={newClientForm}
                          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          placeholder="Email Address"
                        />
                      </div>
                    </section>
                    <div className="text-sm grid gap-2">
                      <label>Address</label>
                      <input
                        name="address"
                        type="text"
                        value={address}
                        onChange={newClientForm}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Address"
                      />
                    </div>
                    <div className="text-sm grid gap-2">
                      <label>Gender</label>
                      <select
                        className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                        name="gender"
                        value={gender}
                        onChange={newClientForm}
                      >
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
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
                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
                      type="submit"
                      onClick={() => {
                        addNewClient();
                        setOpen(false);
                      }}
                    >
                      <MdTaskAlt />
                      <p className="text-xs">Create Client</p>
                    </button>
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
