import { useState } from "react";
import JobDetails from ".";
import { BiPlus, BiTask } from "react-icons/bi";
import { BsFileMedical } from "react-icons/bs";
import { RiArrowLeftRightFill } from "react-icons/ri";
import NewInvoiceForm from "@/components/forms/NewInvoiceForm";
import NewWorkRequestedForm from "@/components/forms/NewWorkRequestedForm";
import JobCardImport from "@/components/JobCardImport";

const Invoices = () => {
  const [invoice, setInvoice] = useState(false);
  const [show, setShow] = useState(false);
  const [workRequested, setWorkRequested] = useState(false);
  const [jobImport, setJobImport] = useState(false);

  return (
    <JobDetails>
      {invoice && <NewInvoiceForm invoice={invoice} setInvoice={setInvoice} />}
      {jobImport && (
        <JobCardImport jobImport={jobImport} setJobImport={setJobImport} />
      )}

      {workRequested && (
        <NewWorkRequestedForm
          workRequested={workRequested}
          setWorkRequested={setWorkRequested}
        />
      )}

      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Project Invoices
            </h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of invoices for TOYOTA Camry - KSF-178-HX project.
            </p>
          </div>
          <div className="grid sm:flex items-center gap-2">
            <button
              className="flex items-center gap-2 hover:bg-[#0971fe] hover:text-white border border-[#9dc6ff] bg-[#e4efff] text-[#0971fe] py-2 px-4 rounded-md text-sm cursor-pointer font-bold relative"
              onClick={() => setShow(!show)}
            >
              <RiArrowLeftRightFill />
              <span>Import From</span>
              {show && (
                <div className="absolute py-6 shadow-lg sm:grid hidden gap-4 bg-white rounded-md text-lg font-medium top-[2.4rem] -left-7 z-10">
                  <div
                    className="flex items-center gap-2 px-4 cursor-pointer text-[#364a63]"
                    onClick={() => setWorkRequested(true)}
                  >
                    <BiTask />
                    <p className="text-[0.76rem]">Work Requested</p>
                  </div>
                  <div
                    className="flex items-center px-4 gap-2 cursor-pointer text-[#364a63]"
                    onClick={() => setJobImport(true)}
                  >
                    <BsFileMedical />
                    <p className="text-[0.76rem]">Approved Jobcard</p>
                  </div>
                </div>
              )}
            </button>
            <button
              className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
              onClick={() => setInvoice(true)}
            >
              <BiPlus />
              <span>Create Invoice</span>
            </button>
          </div>
        </div>
        <div className="w-full min-h-[9em] bg-white mx-auto text-[#8094ae] text-md pb-4">
          <section className="flex items-center justify-between pt-6 pb-4 text-xs font-bold">
            <p>#</p>
            <p>Project / Assigned To</p>
            <p>Title</p>
            <p>Due Date</p>
            <p>Cost</p>
            <p>Status</p>
          </section>
          <hr className="mb-3" />
          <p className="text-xs text-center">It`s empty here!</p>
        </div>
      </div>
    </JobDetails>
  );
};

export default Invoices;
