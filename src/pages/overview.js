import { useState } from "react";
import Layout from "../../layout/Layout";
import {
  BsCreditCard,
  BsThreeDotsVertical,
  BsCheck2Circle,
} from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import Link from "next/link";

const Overview = () => {
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">Overview</h1>
        <div className="sm:flex items-center gap-3 hidden ">
          <Link
            href={"/clients"}
            className="flex items-center gap-2 bg-[#e4efff] hover:bg-[#0971fe] py-2 px-6 rounded-sm text-sm text-[#0971fe] hover:text-white cursor-pointer font-bold"
          >
            <FaUserFriends />
            <p>View Clients</p>
          </Link>
          <Link
            href={"/jobs"}
            className="flex items-center gap-2 bg-[#0971fe] py-2 px-6 rounded-sm text-sm text-white cursor-pointer font-bold"
          >
            <RiFileList3Fill />
            <p>Projects</p>
          </Link>
        </div>
        <div
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setMoreInfo(!moreInfo)}
        >
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="grid gap-6 text-[#364a63] pb-6 relative">
        <div
          className={`px-6 flex sm:hidden items-center justify-between transition-all duration-300 linear bg-white absolute w-full shadow-md ${
            moreInfo ? " h-20 opacity-100" : " h-0 opacity-0"
          }`}
        >
          {moreInfo && (
            <>
              <div
                className="flex items-center gap-2 bg-blue-100 hover:bg-[#0971fe] py-1.5 px-4 rounded-md text-md text-[#0971fe] hover:text-white cursor-pointer font-bold"
                onClick={() => setOpen(true)}
              >
                <FaUserFriends />
                <p>View Clients</p>
              </div>
              <div
                className="flex items-center gap-2 bg-[#0971fe] py-1.5 px-4 rounded-md text-md text-white cursor-pointer font-bold"
                onClick={() => setOpen(true)}
              >
                <RiFileList3Fill />
                <p>Projects</p>
              </div>
            </>
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-6 ">
          <article className="grid md:grid-cols-2 grid-rows-2 gap-6">
            <div className="border border-t-teal-400 bg-white rounded-md min-h-[10em] px-5 md:px-2 lg:px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">
                Unpaid Invoices
              </h4>
              <p className="text-3xl sm:text-xl lg:text-[1.6rem] font-semibold">
                354,825.00
              </p>
              <div className="flex items-center gap-2 text-sm md:text-xs lg:text-sm">
                <BsCreditCard className="text-red-400" />
                <p className="text-red-500">354,825.00</p>
                <p>Overdue</p>
              </div>
            </div>
            <div className="border border-t-teal-400 bg-white rounded-md min-h-[10em] px-5 md:px-2 lg:px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">Active Jobs</h4>
              <p className="text-3xl sm:text-xl lg:text-[1.6rem] font-semibold">
                0
              </p>
              <div className="flex items-center gap-2 text-sm lg:text-sm">
                <BsCreditCard className="text-green-400" />
                <p className="text-green-500">0</p>
                <p>Completed</p>
              </div>
            </div>
            <div className="border border-t-teal-400 bg-white rounded-md min-h-[10em] px-5 md:px-2 lg:px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">
                Pending Tasks
              </h4>
              <p className="text-3xl sm:text-xl lg:text-[1.6rem] font-semibold">
                0
              </p>
              <div className="flex items-center gap-2 text-sm lg:text-sm">
                <RiFileList3Fill className="text-green-400" />
                <p className="text-green-500">0</p>
                <p>Completed</p>
              </div>
            </div>
            <div className="border border-t-teal-400 bg-white rounded-md min-h-[10em] px-5 md:px-2 lg:px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">Income</h4>
              <p className="text-3xl sm:text-xl lg:text-[1.6rem] font-semibold">
                2,010,675.00
              </p>
              <div className="flex items-center gap-2 text-sm lg:text-sm">
                <BsCreditCard className="text-green-400" />
                <p className="text-green-500">1</p>
                <p>payments</p>
              </div>
            </div>
          </article>
          <article className="bg-white border border-t-teal-400 rounded-md p-5">
            <h2 className="font-bold capitalize text-md">job statistics</h2>
          </article>
        </div>
        <div className="grid md:grid-cols-2 gap-6 ">
          <article className="bg-white border border-t-indigo-400 rounded-md p-5">
            <h2 className="font-bold capitalize text-md">Task statistics</h2>
          </article>
          <article className="grid md:grid-cols-2 grid-rows-2 gap-6">
            <div className="border border-t-indigo-400 bg-white rounded-md min-h-[10em] px-5 md:px-2 lg:px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">Income 2023</h4>
              <p className="text-3xl sm:text-xl lg:text-[1.6rem] font-semibold">
                2,010,675.00
              </p>
              <div className="flex items-center gap-2 text-sm lg:text-sm">
                <BsCheck2Circle className="text-green-400" />
                <p>Payments this year</p>
              </div>
            </div>
            <div className="border border-t-indigo-400 bg-white rounded-md min-h-[10em] px-5 md:px-2 lg:px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">Profits 2023</h4>
              <p className="text-3xl sm:text-xl lg:text-[1.6rem] font-semibold">
                2,365,500.00
              </p>
              <div className="flex items-center gap-2 text-sm lg:text-sm">
                <BsCheck2Circle className="text-green-400" />
                <p>Income minus expenses</p>
              </div>
            </div>
            <div className="border-2 border-t-indigo-400 bg-white rounded-md min-h-[10em] px-5 md:px-2 lg:px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">
                Total Clients
              </h4>
              <p className="text-3xl sm:text-xl lg:text-[1.6rem] font-semibold">
                1
              </p>
              <div className="flex items-center gap-2 text-sm lg:text-sm">
                <BsCheck2Circle className="text-green-400" />
                <p>Active Clients</p>
              </div>
            </div>
            <div className="border-2 border-t-indigo-400 bg-white rounded-md min-h-[10em] px-5 md:px-2 lg:px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">Total Staff</h4>
              <p className="text-3xl sm:text-xl lg:text-[1.6rem] font-semibold">
                4
              </p>
              <div className="flex items-center gap-2 text-sm lg:text-sm">
                <BsCheck2Circle className="text-green-400" />
                <p>Active & Inactive Staff</p>
              </div>
            </div>
          </article>
        </div>
        <div className="p-5 bg-white rounded-md min-h-[20em]">
          <h2 className="font-bold text-sm">Payments last 12 months</h2>
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
