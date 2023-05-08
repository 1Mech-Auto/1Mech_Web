import { useState } from "react";
import JobDetails from ".";
import { BiPlus, BiTask } from "react-icons/bi";
import { BsFileMedical } from "react-icons/bs";
import { RiArrowLeftRightFill } from "react-icons/ri";
import NewTask from "@/components/NewTask";
import NewWorkRequestedForm from "@/components/NewWorkRequestedForm";

const Tasks = () => {
  const [task, setTask] = useState(false);
  const [show, setShow] = useState(false);
  const [workRequested, setWorkRequested] = useState(false);
  return (
    <JobDetails>
      {task && <NewTask task={task} setTask={setTask} />}
      {workRequested && <NewWorkRequestedForm workRequested={workRequested} setWorkRequested={setWorkRequested} />}
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-xl font-semibold">Project Tasks</h3>
            <p className="text-sm text-[#526484]">
              A list of tasks for TOYOTA Camry - KSF-178-HX project totalling
              N0.00.
            </p>
          </div>
          <div className="flex items-center gap-2 relative">
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
                    // onClick={() => setJobCard(true)}
                  >
                    <BsFileMedical />
                    <p className="text-[0.76rem]">Approved Jobcard</p>
                  </div>
                </div>
              )}
            </button>
            <button
              className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
              onClick={() => setTask(true)}
            >
              <BiPlus />
              <span>Create Task</span>
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

export default Tasks;
