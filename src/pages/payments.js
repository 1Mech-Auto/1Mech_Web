import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import NewPaymentForm from "@/components/NewPaymentForm";

const Payments = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      {open && <NewPaymentForm open={open} setOpen={setOpen} />}
      <section className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Payments</h1>
          <p className="text-sm text-gray-400 ">A total of 2 payments.</p>
        </div>
        <button
          className="flex items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => setOpen(true)}
        >
          <BiPlus />
          <span>Add Payment</span>
        </button>
      </section>
      <div className="bg-white min-h-[85vh] p-6">
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
          <main className="font-semibold text-gray-400 text-sm grid grid-cols-[3%,25%,15%,12%,12%,14%,10%,5%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Client</div>
            <div>Project</div>
            <div>Items</div>
            <div>Date</div>
            <div>Total/Balance</div>
            <div>Status</div>
            <div></div>
          </main>
          <div className="font-medium text-gray-400 text-sm grid grid-cols-[3%,25%,15%,12%,12%,14%,10%,5%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p className="p-2.5 bg-blue-500 rounded-full text-white">ME</p>
              <div>
                <h2 className="font-medium text-black">Mr. Emmanuel Afolabi</h2>
                <p className="text-xs">+2348167821219</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-black">TOYOTA Sienna</h3>
              <p className="text-sm">AAA808EJ</p>
            </div>
            <div>
              <p className="font-medium text-black">Invoice #117</p>
            </div>
            <div>
              <p>Apr 20, 2023</p>
            </div>
            <div className="font-medium">
              <p className=" text-black">N64,000.00</p>
              <p>Online Payment</p>
            </div>
            <div className="py-1.5 px-2.5 text-green-500 bg-green-100 rounded-2xl flex items-center gap-2">
              <RxDotFilled className="text-lg" />
              <p className="text-sm font-bold">Paid</p>
            </div>
            <div>
              <BsThreeDots className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payments;
