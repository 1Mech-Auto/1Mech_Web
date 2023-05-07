import { useState } from "react";
import JobDetails from ".";
import { RiInformationLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import NewNotes from "@/components/NewNotes";

const Details = () => {
  const [notes, setNotes] = useState(false);

    return (
      <JobDetails>
        {notes && <NewNotes notes={notes} setNotes={setNotes} />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-16 px-6 text-sm">
          <div className="py-6 md:col-span-2">
            <h3 className="text-xl font-semibold">Project Information</h3>
            <p className="text-sm text-[#526484]">
              Basic project info, that gives project summary.
            </p>
          </div>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Project</p>
            <p className="font-medium text-[#364a63]">TOYOTA Camry</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Registration</p>
            <p className="font-medium text-[#364a63]">KSF-178-HX</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">VIN</p>
            <p className="font-medium text-[#364a63]">4T1BF1FK4CU055954.</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Color</p>
            <p className="font-medium text-[#364a63]">#000000</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Car Year</p>
            <p className="font-medium text-[#364a63]">2012</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Insurance Company</p>
            <p className="font-medium text-[#364a63]">Nil</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Booking Date & Time</p>
            <p className="font-medium text-[#364a63]">May 2, 2023 02:14pm</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Client Name</p>
            <p className="font-medium text-[#364a63]">Autogirl Nig Ltd</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Start Date</p>
            <p className="font-medium text-[#364a63]">May 2, 2023</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Completion</p>
            <p className="font-medium text-[#364a63]">May 9, 2023</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Mileage In</p>
            <p className="font-medium text-[#364a63]"></p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Road Test In</p>
            <p className="font-medium text-[#364a63]">None</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Invoiced</p>
            <p className="font-medium text-[#364a63]">N0.00</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Total Cost</p>
            <p className="font-medium text-[#364a63]">N0.00</p>
          </article>
          <article className="flex items-center justify-between ">
            <p className="text-[#8094ae]">Insurance Covered Repairs</p>
            <p className="py-1.5 px-3 font-semibold text-[#e85347] bg-[#e8534726] rounded-2xl flex items-center text-xs gap-2 ">
              Not Covered
            </p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Insurance covering repairs</p>
            <p className="font-medium text-[#364a63]">N/A</p>
          </article>
          <article className="md:col-span-2 text-xs font-medium">
            ADDITIONAL INFORMATION
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Tasks</p>
            <p className="font-medium text-[#364a63]">0/0</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Client Phone</p>
            <p className="font-medium text-[#364a63]">+2347088172629</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Profit</p>
            <p className="font-medium text-[#364a63]">N0.00</p>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Status</p>
            <div className="font-semibold bg-[#f4bd0e26] text-[#f4bd0e] py-1.5 px-4 text-xs rounded-xl">
              In Progress
            </div>
          </article>
          <article className="flex items-center justify-between">
            <p className="text-[#8094ae]">Brought In By</p>
            <p className="font-medium text-[#364a63]">Client</p>
          </article>
          <hr className="md:col-span-2" />
          <div className="md:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-[#364a63] text-lg font-semibold">
                Project Notes
              </p>
              <div
                className="flex gap-1 text-[#0971fe]"
                onClick={() => setNotes(true)}
              >
                <BsPlus />
                <p className="font-medium cursor-pointer text-xs">Add Note</p>
              </div>
            </div>
            <div className="min-h-[40vh] flex flex-col items-center justify-center gap-2 text-[#8094ae]">
              <RiInformationLine className="text-5xl" />
              <p>No notes added yet</p>
            </div>
          </div>
        </div>
      </JobDetails>
    );
};

export default Details;