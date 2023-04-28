import React from "react";
import { HiPhoto } from "react-icons/hi2";
import ToggleInputForm from "@/components/ToggleInputForm";
import Settings from ".";

const Company = () => {
  return (
    <Settings>
      <div className="pl-10">
        <section className="py-5">
          <h3 className="text-[1.7rem] font-bold mb-5">Company Information</h3>
          <p className="text-md">
            Basic company information and system preferences.
          </p>
        </section>
        <form className="w-[65%] grid gap-4 mt-8">
          <div className="grid gap-2">
            <label className="font-semibold">Company Name</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="col-span-full">
            <label for="cover-photo" className="block font-semibold leading-6">
              Company Logo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <HiPhoto className="text-3xl mx-auto" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    for="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            <p className="italic text-xs">
              Your logo will be displayed on your invoices and quotes.
            </p>
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
          <div className="grid gap-2">
            <label className="font-semibold">Town/City</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Country</label>
            <select className="w-full border outline-none py-2 pl-2 rounded-md">
              <option>Nigerian</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">TimeZone</label>
            <select className="w-full border outline-none py-2 pl-2 rounded-md">
              <option>Nigerian</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Currency</label>
            <select className="w-full border outline-none py-2 pl-2 rounded-md">
              <option>Nigerian Naira (NGN)</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">KRA PIN</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
            <p className="italic text-xs">
              This printed on invoices and quotes.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">VAT Tax (%)</label>
            <input
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Payment Details</label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              Payment details will be printed on the invoices.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Invoice Disclaimer</label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              Payment details will be printed on the invoices.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Quotes Disclaimer</label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              Payment details will be printed on the invoices.
            </p>
          </div>
          <ToggleInputForm label="Send SMS to team members when new tasks are created." />
          <ToggleInputForm label="Fix insurance covered repairs." />
          <ToggleInputForm label="Add vehicle parts/expenses to inventory." />
          <ToggleInputForm label="Vehicle tasks should be completed before marking a vehicle as completed." />
          <ToggleInputForm label="Vehicles must be marked as completed before checking out." />
          <ToggleInputForm label="Restrict check out until all parts, expenses, receivables & issuables are cleared." />
          <ToggleInputForm label="Enable client signatures on invoices." />
          <ToggleInputForm label="Enable client signatures on invoices." />
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

export default Company;
