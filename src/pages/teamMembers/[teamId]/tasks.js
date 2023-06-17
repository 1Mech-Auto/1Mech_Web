import { useState } from "react";
import DetailsPage from ".";
import { BiPlus } from "react-icons/bi";

const Tasks = () => {
  return (
    <DetailsPage>
      <div className="px-6">
        <div className="flex items-center">
          <div className="py-6 md:col-span-2">
            <h3 className="text-xl font-semibold">Assigned Tasks</h3>
            <p className="text-sm text-[#526484]">
              A list of tasks assigned to Solace Enyinnaya.
            </p>
          </div>
        </div>
        <div className="w-full min-h-[9em] bg-white mx-auto text-[#8094ae] text-md pb-4">
          <section className="flex items-center justify-between pt-6 pb-4 text-xs font-bold">
            <p>#</p>
            <p>Project</p>
            <p>Items</p>
            <p>Date/Due</p>
            <p>Total / Balance</p>
            <p>Status</p>
          </section>
          <hr className="mb-3" />
          <p className="text-xs text-center">It`s empty here!</p>
        </div>
      </div>
    </DetailsPage>
  );
}

export default Tasks