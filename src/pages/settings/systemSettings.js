import React from "react";
import Settings from ".";

const SystemSettings = () => {
  return (
    <Settings>
      <div className="pl-10">
        <section className="py-5">
          <h3 className="text-[1.7rem] font-bold mb-5">System Settings</h3>
          <p className="text-md">Manage system settings and API keys.</p>
        </section>
        <form className="w-[65%] grid gap-4 mt-8">
          <div className="grid gap-2">
            <label className="font-semibold">System Name</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <hr />
          <p className="text-sm">Africa`s Talking API Keys</p>
          <div className="grid gap-2">
            <label className="font-semibold">Username</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">API Key</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Sernder ID</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <hr />
          <p className="text-sm">SMTP Settings</p>
          <div className="grid gap-2">
            <label className="font-semibold">Username</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Send Email as</label>
            <input
              type="email"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Host</label>
            <input
              type="email"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Password</label>
            <input
              type="password"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Port</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Encryption</label>
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

export default SystemSettings;
