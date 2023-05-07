import {useState} from "react";
import DetailsPage from ".";
import { RiInformationLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import NewNotes from "@/components/NewNotes";



const Details = () => {
  const [notes, setNotes] = useState(false);

  return (
    <DetailsPage>
      {notes && <NewNotes notes={notes} setNotes={setNotes} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-16 px-6 text-sm">
        <div className="py-6 md:col-span-2">
          <h3 className="text-xl font-semibold">Client Information</h3>
          <p className="text-sm text-[#526484]">
            Basic client info, that gives client summary.
          </p>
        </div>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Client Name</p>
          <p className="font-medium text-[#364a63]">Autogirl Nig Ltd</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Phone Number</p>
          <p className="font-medium text-[#364a63]">+2347088172629</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Email</p>
          <p className="font-medium text-[#364a63]">
            chichi.arinze@autogirl.ng
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Active Jobs</p>
          <p className="font-medium text-[#364a63]">1/1</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Address</p>
          <p className="font-medium text-[#364a63]">Isolo</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Gender</p>
          <p className="font-medium text-[#364a63]">Female</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Balance</p>
          <p className="font-medium text-[#364a63]">N0.00</p>
        </article>
        <article className="md:col-span-2 text-xs font-medium">
          ADDITIONAL INFORMATION
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Invoices</p>
          <p className="font-medium text-[#364a63]">0</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Quotes</p>
          <p className="font-medium text-[#364a63]">2</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Payments</p>
          <p className="font-medium text-[#364a63]">N0.00</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Status</p>
          <div className="font-medium bg-[#1ee0ac26] text-[#1ee0ac] py-1.5 px-4 text-xs rounded-xl">
            Active
          </div>
        </article>
        <hr className="md:col-span-2" />
        <div className="md:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-[#364a63] text-lg font-semibold">Client Notes</p>
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
    </DetailsPage>
  );
};

export default Details;