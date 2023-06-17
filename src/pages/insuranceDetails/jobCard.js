import { useState } from "react";
import DetailsPage from ".";
import { RiInformationLine } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import { BiPlus } from "react-icons/bi";
import NewJobCard from "@/components/forms/NewJobCard";
import { useFormContext } from "@/context/form_context";

const JobCard = () => {
  const [jobCard, setJobCard] = useState(false);
  const { jobCardList } = useFormContext();
  return (
    <DetailsPage>
      {jobCard && <NewJobCard jobCard={jobCard} setJobCard={setJobCard} />}

      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Project Job Cards
            </h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of job cards for Autogirl Nig Ltd projects.
            </p>
          </div>
          <button
            className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
            onClick={() => setJobCard(true)}
          >
            <BiPlus className="text-lg sm:text-sm" />
            <span className="hidden sm:block">Create Job Card</span>
          </button>
        </div>
        {jobCardList.length >= 1 ? (
          jobCardList.map((job, index) => {
            return (
              <div key={index} className="p-6 bg-gray-50 grid gap-4 relative">
                <div className="py-1.5 px-2.5 text-yellow-500 bg-yellow-100 rounded-2xl items-center gap-1 hidden md:flex absolute right-6 top-6">
                  <RxDotFilled className="text-xl" />
                  <p className="text-xs font-bold">Assessment</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Body Report</h3>
                  <p className="text-sm pl-4 pt-3">1. {job.body}</p>
                </div>
                <hr />
                <div>
                  <h3 className="text-sm font-semibold">Mechanical Report</h3>
                  <p className="text-sm pl-4 pt-3">1. {job.mechanical}</p>
                </div>
                <hr />
                <div>
                  <h3 className="text-sm font-semibold">Electrical Report</h3>
                  <p className="text-sm pl-4 pt-3">1. {job.electrical}</p>
                </div>
                <hr />
                <div>
                  <h3 className="text-sm font-semibold">Images</h3>
                  <div className="mt-4 text-xs flex flex-wrap justify-between text-[#0971fe] w-3/4 gap-2">
                    <p className="text-[#8094ae]">
                      Job Card <b>#169</b> on {job.date} at 11:21am
                    </p>
                    <p className="cursor-pointer">Edit Job Card</p>
                    <p className="cursor-pointer">Create Approved Version</p>
                    <p className="cursor-pointer">View Job Card</p>
                    <p className="cursor-pointer">Download Job Card</p>
                    <p className="text-red-600 cursor-pointer">Delete</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="min-h-[30vh] flex flex-col items-center justify-center gap-2 text-[#8094ae]">
            <RiInformationLine className="text-5xl" />
            <p>No job card created yet!t</p>
          </div>
        )}
      </div>
    </DetailsPage>
  );
};

export default JobCard;
