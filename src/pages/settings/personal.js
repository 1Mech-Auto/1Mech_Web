import React from "react";
import Settings from ".";

const Personal = () => {
  return (
    <Settings>
      <div className="pl-10">
        <section className="py-5">
          <h3 className="text-[1.7rem] font-bold mb-5">Personal Information</h3>
          <p className="text-md">
            Basic info, like your name and email, that you use on 1Mech.
          </p>
        </section>
        <form className="grid gap-4 w-[65%]">
          <div className="grid gap-2">
            <label className="font-semibold">First Name</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Last Name</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Email Address</label>
            <input
              type="email"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Phone Number</label>
            <input
              type="tel"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Address</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="flex justify-end">
            <button className="p-3 bg-blue-500 text-white rounded-md text-md font-bold ml-auto">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Settings>
  );
};

export default Personal;
