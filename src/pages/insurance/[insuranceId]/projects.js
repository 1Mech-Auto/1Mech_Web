import { useState } from "react";
import DetailsPage from ".";
import { BiPlus } from "react-icons/bi";

const Projects = () => {
  return (
    <DetailsPage>
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-xl font-semibold">Company Projects</h3>
            <p className="text-sm text-[#526484]">
              A list of Jubilee Insurance Company`s projects.
            </p>
          </div>
        </div>
        <div className="w-full min-h-[9em] bg-white mx-auto text-[#8094ae] text-md pb-4">
          <section className="flex items-center justify-between pt-6 pb-4 text-xs font-bold">
            <p>#</p>
            <p>Project</p>
            <p>Invoice</p>
            <p>Payment Date</p>
            <p>Amount</p>
            <p>Status</p>
          </section>
          <hr className="mb-3" />
          <p className="text-xs text-center">It`s empty here!</p>
        </div>
      </div>
    </DetailsPage>
  );
};

export default Projects;
