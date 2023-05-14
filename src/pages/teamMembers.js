import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import NewTeamMemberForm from "@/components/NewTeamMemberForm";
import { CgMenuRight } from "react-icons/cg";
import { useFormContext } from "@/context/form_context";

const TeamMembers = () => {
  const [open, setOpen] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const { teamList } = useFormContext();

  return (
    <Layout>
      {open && <NewTeamMemberForm open={open} setOpen={setOpen} />}
      <section className="flex justify-between items-center mb-6 px-6 sm:px-0">
        <div>
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Team Members
          </h1>
          <p className="text-sm text-[#8094ae] ">A total of 4 team members.</p>
        </div>
        <button
          className="sm:flex hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => {
            setOpen(true);
          }}
        >
          <BiPlus />
          <span>Create Member</span>
        </button>
        <div
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setMoreInfo(!moreInfo)}
        >
          <CgMenuRight />
        </div>
      </section>
      <div className="bg-white min-h-[85vh] p-6 relative">
        <div
          className={`px-6 flex sm:hidden items-center justify-between transition-all duration-300 linear bg-white absolute left-0 top-0 w-full shadow-md ${
            moreInfo ? " h-20 opacity-100" : " h-0 opacity-0"
          }`}
        >
          {moreInfo && (
            <button
              className="flex sm:hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold"
              onClick={() => {
                setOpen(true);
              }}
            >
              <BiPlus />
              <span>Create Member</span>
            </button>
          )}
        </div>
        <div className="flex justify-between mb-4">
          <input
            className="placeholder:text-xs border pl-2 py-1 rounded-sm"
            placeholder="Type in to Search"
          />
          <div className="flex items-center gap-2">
            <p className="text-sm hidden sm:block">Show</p>
            <select className="outline-none border rounded-md text-xs px-1">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div className="border rounded-md min-h-[30vh] overflow-x-auto ">
          <main className="font-medium text-[#8094ae] text-sm grid grid-cols-[6%,40%,22%,22%,5%] gap-2 md:grid-cols-[3em,15em,8em,8em,7em,9em,7em,3em] lg:grid-cols-[3%,25%,12%,12%,10%,15%,10%,4%] p-2.5 border border-transparent border-b-gray-200">
            <div>#</div>
            <div>Member</div>
            <div>Role</div>
            <div>Balance</div>
            <div className="hidden md:block">P.Tasks</div>
            <div className="hidden md:block">Created On</div>
            <div className="hidden md:block">Status</div>
            <div></div>
          </main>
          <div className="font-normal text-[#364a63] text-sm grid grid-cols-[6%,40%,22%,22%,5%] gap-2 md:grid-cols-[3em,15em,8em,8em,7em,9em,7em,3em] lg:grid-cols-[3%,25%,12%,12%,10%,15%,10%,4%] items-center p-2.5 border border-transparent border-b-gray-200 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
                ME
              </p>
              <div>
                <h2 className="font-medium">Mr. Emmanuel Afolabi</h2>
                <p className="text-xs text-[#8094ae]">+2348167821219</p>
              </div>
            </div>
            <div className="py-1.5 px-2.5 text-green-500 bg-green-100 rounded-2xl flex items-center gap-2 mr-auto">
              <RxDotFilled className="text-lg" />
              <p className="text-xs font-bold">Owner</p>
            </div>
            <div>N0.00</div>
            <div className="hidden md:block text-[#8094ae]">0/0</div>
            <div className="hidden md:block text-[#8094ae]">April 18,2023</div>
            <div className="text-green-500 hidden md:block">Active</div>
            <div>
              <BsThreeDots className="cursor-pointer" />
            </div>
          </div>
          {teamList &&
            teamList.map((team, index) => {
              return (
                <div
                  key={index}
                  className="font-normal text-[#364a63] text-sm grid grid-cols-[6%,40%,22%,22%,5%] gap-2 md:grid-cols-[3em,15em,8em,8em,7em,9em,7em,3em] lg:grid-cols-[3%,25%,12%,12%,10%,15%,10%,4%] items-center p-2.5 border border-transparent border-b-gray-200 hover:shadow-hoverPurple"
                >
                  <div>{index + 1}</div>
                  <div className="flex items-center gap-2">
                    <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
                      ME
                    </p>
                    <div>
                      <h2 className="font-medium">
                        {team.firstName} {team.lastName}
                      </h2>
                      <p className="text-xs text-[#8094ae]">{team.phone}</p>
                    </div>
                  </div>
                  <div className="py-1.5 px-2.5 text-green-500 bg-green-100 rounded-2xl flex items-center gap-2 mr-auto">
                    <RxDotFilled className="text-lg" />
                    <p className="text-xs font-bold">{team.role}</p>
                  </div>
                  <div>N0.00</div>
                  <div className="hidden md:block text-[#8094ae]">0/0</div>
                  <div className="hidden md:block text-[#8094ae]">
                    {team.date}
                  </div>
                  <div className="text-green-500 hidden md:block">
                    {team.type}
                  </div>
                  <div>
                    <BsThreeDots className="cursor-pointer" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default TeamMembers;
