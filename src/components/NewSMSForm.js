import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FaSms } from "react-icons/fa";
import { useFormContext } from "@/context/form_context";

const NewSMSForm = ({ sms, setSms }) => {
  const cancelButtonRef = useRef(null);
  const {
    smsForm: { sendTo, phone, message },
    newSms,
    sendSms,
  } = useFormContext();
  return (
    <Transition.Root show={sms} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setSms}
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
                <div className="border bg-white rounded-lg capitalize text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
                    <h3>Send SMS</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setSms(false)}
                    />
                  </div>
                  <p className="text-sm font-semibold mt-6 normal-case px-4">
                    Create an SMS
                  </p>
                  <form className="mt-3 grid gap-8 px-4 pb-4">
                    <div className="text-sm grid gap-2">
                      <label>Send To</label>
                      <input
                        name="sendTo"
                        type="text"
                        value={sendTo}
                        onChange={newSms}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Send To"
                      />
                    </div>
                    <div className="text-sm grid gap-2">
                      <label>Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={newSms}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="text-sm grid gap-2">
                      <label>Message</label>
                      <textarea
                        name="message"
                        type="text"
                        value={message}
                        onChange={newSms}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae] h-20"
                        placeholder="Message"
                      />
                      <p className="italic text-xs">
                        We`ll include your company name One-Mech Limited at the
                        end of the message
                      </p>
                    </div>
                  </form>
                  <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                    <article
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                      onClick={() => setSms(false)}
                    >
                      <MdOutlineCancel />
                      <p className="text-xs">cancel</p>
                    </article>
                    <article
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
                      onClick={() => {
                        sendSms();
                        setSms(false);
                      }}
                    >
                      <MdTaskAlt />
                      <p className="text-xs">Send Messages</p>
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

export default NewSMSForm;
