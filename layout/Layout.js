import React, { useState } from "react";
import Link from "next/link";
import {
  RiFileList3Fill,
  RiMoneyPoundCircleFill,
  RiSettings3Fill,
  RiMenuFill,
} from "react-icons/ri";
import { BsFillClipboard2CheckFill, BsChatDotsFill } from "react-icons/bs";
import NewVehicleForm from "@/components/NewVehicleForm";
import { FaUser, FaUserClock } from "react-icons/fa";
import {
  BiPlus,
  BiUser,
  BiChevronDown,
  BiDoughnutChart,
  BiPulse,
} from "react-icons/bi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { TbMessageDots } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import oneMech from "../public/logo-dark.png";
import Image from "next/image";
import NewFeedbackForm from "@/components/NewFeedbackForm";

const menuItems = [
  {
    title: "Overview",
    links: [
      {
        name: "Overview",
        icon: <BiPulse />,
        href: "/overview",
      },
    ],
  },

  {
    title: "Application",
    links: [
      {
        name: "Clients",
        icon: <FaUser />,
        href: "/clients",
      },
      {
        name: "Job Center",
        icon: <RiFileList3Fill />,
        href: "#",
        subMenus: [
          { name: "Jobs / Vehicles", href: "/jobs" },
          { name: "Pending Tasks", href: "/pendingTasks" },
          { name: "Expected Parts", href: "/expectedParts" },
          { name: "Unpaid Parts", href: "/unpaidParts" },
          { name: "Insurance Co.", href: "/insurance" },
        ],
      },
      {
        name: "Accounting",
        icon: <RiMoneyPoundCircleFill />,
        href: "#",
        subMenus: [
          { name: "Quotes", href: "/quotes" },
          { name: "Invoices", href: "/invoices" },
          { name: "Payments", href: "/payments" },
        ],
      },
      {
        name: "Inventory",
        icon: <BsFillClipboard2CheckFill />,
        href: "#",
        subMenus: [
          { name: "Inventory List", href: "/inventoryList" },
          { name: "Receivables", href: "/receivables" },
          { name: "Issueables", href: "/issueables" },
          { name: "Suppliers", href: "/suppliers" },
        ],
      },
      {
        name: "Marketing",
        icon: <BsChatDotsFill />,
        href: "/marketing",
      },
    ],
  },
  {
    title: "Management",
    links: [
      {
        name: "Team Members",
        icon: <FaUserClock />,
        href: "/teamMembers",
      },
      {
        name: "Settings",
        icon: <RiSettings3Fill />,
        href: "/settings/personal",
      },
    ],
  },
];

const SingleLink = ({ href, toggleDropdown, name, icon }) => {
  return (
    <Link
      href={href}
      className="font-medium capitalize flex items-center gap-4 py-3 mx-4 px-4  rounded-md hover:bg-gray-200 hover:text-[#0971fe]"
      onClick={toggleDropdown}
    >
      <div className="text-2xl">{icon}</div>
      <div className="text-md font-bold">{name}</div>
    </Link>
  );
};
const SubmenuDropdown = ({ href, name, expand }) => {
  return (
    <ul
      className={`sub-menu pl-[5.1em] max-h-0 overflow-hidden transition-[max-height] duration-200s ease-in grid ${
        expand ? "max-h-[200px]" : null
      }`}
    >
      <Link href={href}>
        <button
          className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
        >
          {name}
        </button>
      </Link>
    </ul>
  );
};

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [expand, setExpand] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const toggleDropdown = () => setExpand(!expand);
  const toggleShowProfile = () => {
    if (showProfile) setShowProfile(false);
  };

  return (
    <main className="flex relative" onClick={toggleShowProfile}>
      {activeMenu && (
        <div
          className="fixed z-20 inset-0 bg-[#10192466] transition duration-200s"
          onClick={() => {
            setActiveMenu(false);
          }}
        ></div>
      )}
      {open ? <NewVehicleForm open={open} setOpen={setOpen} /> : null}
      {feedback ? (
        <NewFeedbackForm feedback={feedback} setFeedback={setFeedback} />
      ) : null}
      <div
        className={`fixed min-h-screen top-0 left-0 w-72 overflow-auto h-full xl:w-72 xl:translate-x-0 transition-{transform,width} duration-500 linear z-30 bg-white ${
          activeMenu ? "translate-x-0 w-72" : "-translate-x-full"
        } pt-8`}
      >
        <div className="mb-4 text-2xl font-extrabold px-8 flex justify-between items-center text-[#6e82a5]">
          <Image src={oneMech} alt="oneMech" className="w-[3.5em] my-auto" />
          {activeMenu && (
            <HiArrowNarrowLeft
              onClick={() => {
                setActiveMenu(false);
              }}
              className="cursor-pointer"
            />
          )}
        </div>
        {/* <SideBar toggleDropdown={ toggleDropdown} expand={expand}  /> */}
        {menuItems.map((menu) => {
          return (
            <div
              key={menu.title}
              className="uppercase font-semibold text-[16px] mb-9 text-[#6e82a5]"
            >
              <div className="uppercase font-medium text-md mb-3 px-8">
                {menu.title}
              </div>
              {menu.links.map((item) => {
                return (
                  <div key={item.name}>
                    <SingleLink
                      href={item.href}
                      toggleDropdown={item.subMenus && toggleDropdown}
                      name={item.name}
                      icon={item.icon}
                    />
                    {item.subMenus &&
                      expand &&
                      item.subMenus.map((menu, index) => {
                        return (
                          <SubmenuDropdown
                            key={index}
                            href={menu.href}
                            name={menu.name}
                            expand={expand}
                          />
                        );
                      })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className=" xl:ml-72 ml-0 duration-300 linear w-full">
        <div className="h-16 w-full fixed z-20 bg-white flex items-center shadow-md">
          <div className="flex w-full justify-between items-center pr-8">
            <div className="flex gap-4 items-center xl:hidden pl-8">
              <div className="text-xl">
                <RiMenuFill
                  onClick={() => {
                    setActiveMenu(true);
                  }}
                  className="cursor-pointer"
                />
              </div>

              <Image src={oneMech} alt="oneMech" className="w-[5em]" />
            </div>
            <div className="xl:mr-[18rem] ml-auto flex items-center gap-8 cursor-pointer relative">
              <div
                className="flex items-center gap-2 bg-[#0971fe] py-1.5 px-5 rounded-sm text-xs text-white cursor-pointer font-bold"
                onClick={() => setOpen(true)}
              >
                <BiPlus />
                <span>New Vehicle</span>
              </div>
              <div
                className="flex items-center gap-2"
                onClick={() => setShowProfile(!showProfile)}
              >
                <BiUser className="p-2 text-3xl bg-[#0971fe] rounded-full text-white" />
                <div className="font-bold hidden sm:grid">
                  <p className="text-green-400 text-xs">Owner</p>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm text-[#364a63]">Emmanuel Johnson</h3>
                    <BiChevronDown />
                  </div>
                </div>
              </div>
              {showProfile && (
                <div className="bg-white absolute top-12 w-[19em] h-[17em] rounded-md shadow-lg right-0 grid">
                  <div className="flex items-center gap-4 bg-gray-100 px-6">
                    <p className="p-2.5 bg-[#0971fe] rounded-full text-white">
                      MJ
                    </p>
                    <div>
                      <h2 className="text-sm text-[#6e82a5]">
                        Mr. Emmanuel Johnson
                      </h2>
                      <p className="text-xs">+2348167821219</p>
                    </div>
                  </div>
                  <div className="px-6 grid border border-transparent border-y-gray-200">
                    <Link
                      href={"settings/personal"}
                      className="mt-2 text-sm flex items-center text-[#526484] gap-2"
                    >
                      <CiSettings className="text-lg" />
                      <p>Account Setting</p>
                    </Link>
                    <div
                      className="mt-2 text-sm flex items-center text-[#526484] gap-2"
                      onClick={() => setFeedback(true)}
                    >
                      <TbMessageDots className="text-lg" />
                      <p>Feedback</p>
                    </div>
                    <Link
                      href={"/"}
                      className="mt-2 text-sm flex items-center text-[#526484] gap-2"
                    >
                      <BiDoughnutChart className="text-lg" />
                      <p>Help Center</p>
                    </Link>
                  </div>
                  <div className="px-6 my-auto text-sm flex items-center text-[#526484] gap-2">
                    <HiOutlineLogout className="text-lg" />
                    <p>Sign Out</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="sm:px-8 py-8 min-h-screen bg-[#f5f6fa] mt-16 relative">
          {children}
        </div>
        <div className="px-8 text-gray-400 h-16 text-sm">
          © 2023 One-Mech • All Rights Reserved.
        </div>
      </div>
    </main>
  );
};

export default Layout;
