import React from "react";
import ToggleInputForm from "@/components/ToggleInputForm";
import Settings from ".";

const BookingForm = () => {
  return (
    <Settings>
      <div className="pl-10">
        <section className="py-5">
          <h3 className="text-[1.7rem] font-bold mb-5">Booking Form</h3>
          <p className="text-md">Manage your company booking form here.</p>
        </section>
        <form className="w-[65%] grid gap-4 mt-8">
          <div className="grid gap-2">
            <label className="font-semibold">Vehicle booking form</label>
            <select className="w-full border outline-none py-2 pl-2 rounded-md">
              <option>Detailed</option>
            </select>
          </div>
          <ToggleInputForm label="Enable car diagram for marking dents and scratches." />
          <div className="grid gap-2">
            <label className="font-semibold">
              Vehicle Booking Form Disclaimer IN
            </label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              This disclaimer will be printed on the bottom of the booking form.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">
              Vehicle Booking Form Disclaimer OUT
            </label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              This disclaimer will be printed on the bottom of the booking form.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold">Terms and Conditions</label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              This disclaimer will be printed on the bottom of the booking form.
            </p>
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

export default BookingForm;
