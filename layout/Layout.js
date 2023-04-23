import React, { useState, useEffect } from "react";
import {
  RiPulseLine,
  RiFileList3Fill,
  RiMoneyPoundCircleFill,
  RiSettings3Fill,
  RiMenuFill,
} from "react-icons/ri";
import { BsFillClipboard2CheckFill, BsChatDotsFill } from "react-icons/bs";
import NewVehicleForm from "@/components/NewVehicleForm";
import { FaUser, FaUserClock } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { HiArrowNarrowLeft } from "react-icons/hi";


const menuItems = [
  {
    title: "Overview",
    links: [
      {
        name: "Overview",
        icon: <RiPulseLine />,
      },
    ],
  },

  {
    title: "Application",
    links: [
      {
        name: "Clients",
        icon: <FaUser />,
      },
      {
        name: "Job Center",
        icon: <RiFileList3Fill />,
      },
      {
        name: "Accounting",
        icon: <RiMoneyPoundCircleFill />,
      },
      {
        name: "Inventory",
        icon: <BsFillClipboard2CheckFill />,
      },
      {
        name: "Marketing",
        icon: <BsChatDotsFill />,
      },
    ],
  },
  {
    title: "Management",
    links: [
      {
        name: "Team Members",
        icon: <FaUserClock />,
      },
      {
        name: "Settings",
        icon: <RiSettings3Fill />,
      },
    ],
  },
];

const Layout = ({ children }) => {
  // const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(false);
  const [toggleVehicle, setToggleVehicle] = useState(false);

  const toggleVehicleForm = () => {
    setToggleVehicle(!toggleVehicle);
  };
  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   if (screenSize <= 900) {
  //     setActiveMenu(false);
  //   } else {
  //     setActiveMenu(true);
  //   }
  // }, [screenSize]);
  return (
    <main className="flex relative">
      {activeMenu && (
        <div
          className="fixed z-[800] inset-0 bg-[#10192466] transition duration-200s"
          onClick={() => {
            setActiveMenu(false);
          }}
        ></div>
      )}
      {toggleVehicle ? (
        <NewVehicleForm toggleVehicleForm={toggleVehicleForm} />
      ) : null}
      <div
        className={`fixed min-h-screen top-0 left-0 w-72 overflow-auto h-full xl:w-72 xl:translate-x-0 transition-{transform,width} duration-500 linear z-[999] bg-white ${
          activeMenu ? "translate-x-0 w-72" : "-translate-x-full"
        } pt-8`}
      >
        <div className="mb-4 text-2xl font-extrabold px-8 flex justify-between text-[#6e82a5]">
          <h3>1MECH</h3>
          {activeMenu && (
            <HiArrowNarrowLeft
              onClick={() => {
                setActiveMenu(false);
              }}
              className="cursor-pointer"
            />
          )}
        </div>

        {menuItems.map((menu) => {
          return (
            <div
              key={menu.title}
              className="uppercase font-semibold text-sm mb-9 text-[#6e82a5]"
            >
              <div className="uppercase font-medium text-md mb-3 px-8">
                {menu.title}
              </div>
              {menu.links.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="font-medium capitalize flex items-center gap-4 py-3 px-8"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div className="text-md font-bold">{item.name}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className=" xl:ml-72 ml-0 duration-300 linear w-full">
        <div className="h-16 w-full fixed z-30 bg-white flex items-center">
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

              <h3 className="text-2xl font-extrabold">1MECH</h3>
            </div>
            <div
              className="flex items-center gap-2 bg-blue-500 p-2 rounded-md text-xs text-white xl:mr-[18rem] cursor-pointer font-bold ml-auto"
              onClick={toggleVehicleForm}
            >
              <BiPlus />
              <span>New Vehicle</span>
            </div>
          </div>
        </div>
        <div className="px-8 pt-8 min-h-screen bg-gray-100 mt-16 relative">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
