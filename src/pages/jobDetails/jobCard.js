import { useState } from "react";
import JobDetails from ".";
import { RiInformationLine } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import NewJobCard from "@/components/NewJobCard";

const JobCard = () => {
  const [jobCard, setJobCard] = useState(false);

    return (
      <JobDetails>
        {jobCard && <NewJobCard jobCard={jobCard} setJobCard={setJobCard} />}

        <div className="px-6">
          <div className="flex items-center justify-between">
            <div className="py-6 md:col-span-2">
              <h3 className="text-xl font-semibold">Project Job Cards</h3>
              <p className="text-sm text-[#526484]">
                A list of job cards for TOYOTA Camry - KSF-178-HX project.
              </p>
            </div>
            <button
              className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
              onClick={() => setJobCard(true)}
            >
              <BiPlus />
              <span>Create Job Card</span>
            </button>
          </div>
          <div className="min-h-[30vh] flex flex-col items-center justify-center gap-2 text-[#8094ae]">
            <RiInformationLine className="text-5xl" />
            <p>No job card created yet!t</p>
          </div>
        </div>
      </JobDetails>
    );
};

export default JobCard;
