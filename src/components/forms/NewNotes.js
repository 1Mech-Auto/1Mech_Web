import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import ValidateForm from "./ValidateForm";
import { newNotesSchema } from "@/schemas";
import SuccessPrompt from "../SuccessPrompt";

const NewNotes = ({ notes, setNotes }) => {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    notesForm: { note },
    newNotesData,
    addNewNotes,
  } = useFormContext();
  const onSubmit = async (values, actions) => {
    addNewNotes();
    setSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    values,
    handleBlur,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      note: note,
    },
    validationSchema: newNotesSchema,
    onSubmit,
  });

  return (
    <Transition.Root show={notes} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setNotes}
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
                <div className="border bg-white rounded-lg capitalize text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 font-semibold border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
                    <h3>Add a Note</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setNotes(false)}
                    />
                  </div>
                  <form
                    className="mt-3 grid gap-8 px-4 pb-4"
                    onSubmit={handleSubmit}
                  >
                    <p className="text-sm">
                      Add a note on this client`s account
                    </p>
                    <div className="text-sm grid gap-2 relative">
                      <label>Write your note</label>
                      <textarea
                        name="note"
                        type="text"
                        value={values.note}
                        onChange={(e) => {
                          handleChange(e);
                          newNotesData(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.note && touched.note
                            ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                        placeholder="Write your note"
                      />
                      {errors.note && touched.note && (
                        <ValidateForm error={errors.note} />
                      )}
                    </div>
                    <div className="flex mt-auto border py-4 bg-gray-200 justify-end gap-2 px-4">
                      <article
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                        onClick={() => setNotes(false)}
                      >
                        <MdOutlineCancel />
                        <p className="text-xs">cancel</p>
                      </article>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`${
                          isSubmitting
                            ? "opacity-40 flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
                            : "flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
                        }`}
                      >
                        <MdTaskAlt />
                        <p className="text-xs">Save Note</p>
                      </button>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="Note saved successfully"
                    open={success}
                    setOpen={setSuccess}
                    setModals={setNotes}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NewNotes;
