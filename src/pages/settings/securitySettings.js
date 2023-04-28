import React from "react";
import { BiShow } from "react-icons/bi";
import Settings from ".";

const SecuritySettings = () => {
  return (
    <Settings>
      <div className="pl-10">
        <section className="py-5">
          <h3 className="text-[1.7rem] font-bold mb-5">Security Settings</h3>
          <p className="text-md">
            Set a unique password to protect your account.
          </p>
        </section>
        <form className="w-[65%] grid gap-4 mt-8">
          <div className="grid gap-2">
            <label className="font-semibold">Current Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full border outline-none py-2 pl-2 rounded-md placeholder:text-sm"
              />
              <BiShow className="absolute top-3 right-2 text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">New Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="New Password"
                className="w-full border outline-none py-2 pl-2 rounded-md placeholder:text-sm"
              />
              <BiShow className="absolute top-3 right-2 text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Confirm New Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full border outline-none py-2 pl-2 rounded-md placeholder:text-sm"
              />
              <BiShow className="absolute top-3 right-2 text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="p-3 bg-blue-500 text-white rounded-md text-md font-bold ml-auto">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </Settings>
  );
};

export default SecuritySettings;
