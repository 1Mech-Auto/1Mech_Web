import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import NewTeamMemberForm from "@/components/NewTeamMemberForm";

const TeamMembers = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      {open && <NewTeamMemberForm open={open} setOpen={setOpen} />}
      <section className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Team Members</h1>
          <p className="text-sm text-gray-400 ">A total of 4 team members.</p>
        </div>
        <button
          className="flex items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => {
            setOpen(true);
          }}
        >
          <BiPlus />
          <span>Create Member</span>
        </button>
      </section>
      <div className="bg-white min-h-[85vh] p-6">
        <div className="flex justify-between mb-4">
          <input
            className="placeholder:text-xs border pl-2 py-1 rounded-sm"
            placeholder="Type in to Search"
          />
          <div className="flex items-center gap-2">
            <p className="text-md">Show</p>
            <select className="outline-none border rounded-md text-sm px-1">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div className="border rounded-md min-h-[30vh] overflow-x-auto ">
          <main className="font-semibold text-gray-400 text-sm grid grid-cols-[3%,25%,12%,12%,10%,15%,10%,4%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Member</div>
            <div>Role</div>
            <div>Balance</div>
            <div>P.Tasks</div>
            <div>Created On</div>
            <div>Status</div>
            <div></div>
          </main>
          <div className="font-medium text-gray-400 text-sm grid grid-cols-[3%,25%,12%,12%,10%,15%,10%,4%] items-center p-2.5 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p className="p-2.5 bg-blue-500 rounded-full text-white">ME</p>
              <div>
                <h2 className="font-medium text-black">Mr. Emmanuel Afolabi</h2>
                <p className="text-xs">+2348167821219</p>
              </div>
            </div>
            <div className="py-1.5 px-2.5 text-green-500 bg-green-100 rounded-2xl flex items-center gap-2">
              <RxDotFilled className="text-lg" />
              <p className="text-sm font-bold">Owner</p>
            </div>
            <div>N0.00</div>
            <div>0/0</div>
            <div>April 18,2023</div>
            <div className="text-green-500">Active</div>
            <div>
              <BsThreeDots className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamMembers;
