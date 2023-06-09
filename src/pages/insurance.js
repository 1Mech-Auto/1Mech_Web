import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { RxDotFilled } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import NewInsuranceForm from "@/components/NewInsuranceForm";
import { CgMenuRight } from "react-icons/cg";
import { useFormContext } from "@/context/form_context";

const Insurance = () => {
  const [open, setOpen] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const { insuranceList } = useFormContext();

  return (
    <Layout>
      <section className="flex justify-between items-center mb-6 px-6 sm:px-0">
        {open && <NewInsuranceForm open={open} setOpen={setOpen} />}
        <div>
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Insurance Companies
          </h1>
          <p className="text-sm text-[#8094ae] ">
            A total of 2 insurance companies.
          </p>
        </div>
        <button
          className="sm:flex hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => setOpen(true)}
        >
          <BiPlus />
          <span>Add Insurance</span>
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
              <span>Add Insurance</span>
            </button>
          )}
        </div>
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
          <main className="font-semibold text-[#8094ae] text-sm grid grid-cols-[4%,50%,35%,5%] md:grid-cols-[3em,15em,14em,9em,7em,9em,8em,3em] lg:grid-cols-[3%,25%,20%,14%,7%,12%,10%,4%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Client</div>
            <div className="hidden md:block">Email</div>
            <div>Unpaid Amounts</div>
            <div className="hidden md:block">A.Jobs</div>
            <div className="hidden md:block">Created On</div>
            <div className="hidden md:block">Status</div>
            <div></div>
          </main>
          <div className="font-medium text-[#364a63] text-sm grid grid-cols-[4%,50%,35%,5%] md:grid-cols-[3em,15em,14em,9em,7em,9em,8em,3em] lg:grid-cols-[3%,25%,20%,14%,7%,12%,10%,4%] items-center p-2.5 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p className="p-2.5 bg-blue-500 rounded-full text-white">ME</p>
              <div>
                <h2 className="font-medium text-[#364a63]">
                  Mr. Emmanuel Afolabi
                </h2>
                <p className="text-xs text-[#8094ae]">+2348167821219</p>
              </div>
            </div>
            <div className="hidden md:block text-[#8094ae]">
              emmanuel@email.com
            </div>
            <div>N390,000.00</div>
            <div className="hidden md:block text-[#8094ae] text-center">
              1/1
            </div>
            <div className="hidden md:block text-[#8094ae]">April 20,2023</div>
            <div className="py-1.5 px-2.5 text-green-500 bg-green-100 rounded-2xl items-center gap-2 hidden md:flex">
              <RxDotFilled className="text-lg" />
              <p className="text-sm font-bold">Active</p>
            </div>
            <div>
              <BsThreeDots className="cursor-pointer" />
            </div>
          </div>
          {insuranceList &&
            insuranceList.map((insurance, index) => {
              return (
                <div
                  key={index}
                  className="font-medium text-[#364a63] text-sm grid grid-cols-[4%,50%,35%,5%] md:grid-cols-[3em,15em,14em,9em,7em,9em,8em,3em] lg:grid-cols-[3%,25%,20%,14%,7%,12%,10%,4%] items-center p-2.5 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple"
                >
                  <div>{index + 1}</div>
                  <div className="flex items-center gap-2">
                    <p className="p-2.5 bg-blue-500 rounded-full text-white">
                      ME
                    </p>
                    <div>
                      <h2 className="font-medium text-[#364a63]">
                        {insurance.companyName}
                      </h2>
                      <p className="text-xs text-[#8094ae]">
                        {insurance.phone}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block text-[#8094ae]">
                    {insurance.email}
                  </div>
                  <div>N390,000.00</div>
                  <div className="hidden md:block text-[#8094ae] text-center">
                    1/1
                  </div>
                  <div className="hidden md:block text-[#8094ae]">
                    {insurance.date}
                  </div>
                  <div className="py-1.5 px-2.5 text-green-500 bg-green-100 rounded-2xl items-center gap-2 hidden md:flex">
                    <RxDotFilled className="text-lg" />
                    <p className="text-sm font-bold">Active</p>
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

export default Insurance;
