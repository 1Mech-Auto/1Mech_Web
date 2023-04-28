import React from "react";
import Layout from "../../../layout/Layout";
import {
  BsFilePersonFill,
  BsChevronRight,
  BsBuildingFill,
  BsCalendarWeek,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { IoMdLock } from "react-icons/io";
import { BiPulse } from "react-icons/bi";
import Link from "next/link";

const Settings = ({ children }) => {
  return (
    <Layout>
      <div className="grid grid-cols-[1fr,2fr] bg-white min-h-[90vh] pb-8 text-[#364a63]">
        <div className="border border-transparent border-r-gray-200 text-[#8094ae]">
          <div className="flex items-center gap-2 px-6 py-7 border border-transparent border-b-gray-200">
            <p className="p-2.5 bg-blue-500 rounded-full text-white">ME</p>
            <div>
              <h2 className="font-medium text-black">Mr. Emmanuel Afolabi</h2>
              <p className="text-xs">+2348167821219</p>
            </div>
          </div>
          <ul className="px-6 font-medium">
            <li className="my-8 flex items-center justify-between cursor-pointer hover:text-blue-500">
              <Link className="flex items-center gap-2"
              href={'personal'}>
                <BsFilePersonFill />
                <p>Personal Information</p>
              </Link>
              <BsChevronRight />
            </li>
            <li className="my-8 flex items-center justify-between cursor-pointer hover:text-blue-500">
              <Link className="flex items-center gap-2"
              href={'company'}>
                <BsBuildingFill />
                <p>Company Information</p>
              </Link>
              <BsChevronRight />
            </li>
            <li className="my-8 flex items-center justify-between cursor-pointer hover:text-blue-500">
              <Link className="flex items-center gap-2"
              href={'bookingForm'}>
                <BsCalendarWeek />
                <p>Booking Form</p>
              </Link>
              <BsChevronRight />
            </li>
            <li className="my-8 flex items-center justify-between cursor-pointer hover:text-blue-500">
              <Link className="flex items-center gap-2"
              href={'/'}>
                <BsFillCheckCircleFill />
                <p>Booking Parts List</p>
              </Link>
              <BsChevronRight />
            </li>
            <li className="my-8 flex items-center justify-between cursor-pointer hover:text-blue-500">
              <Link className="flex items-center gap-2"
              href={'systemSettings'}>
                <BiPulse className="bg-[#8094ae] p-0.5 rounded-full text-white text-lg" />
                <p>System Settings</p>
              </Link>
              <BsChevronRight />
            </li>
            <li className="my-8 flex items-center justify-between">
              <Link className="flex items-center gap-2"
              href={'securitySettings'}>
                <IoMdLock />
                <p>Security Settings</p>
              </Link>
              <BsChevronRight />
            </li>
          </ul>
        </div>
        {children}
      </div>
    </Layout>
  );
};

export default Settings;
