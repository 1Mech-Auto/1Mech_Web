import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import NewSuppliersForm from "@/components/NewSuppliersForm";

const Suppliers = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      {open && <NewSuppliersForm open={open} setOpen={setOpen} />}

      <section className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Suppliers</h1>
          <p className="text-sm text-gray-400 ">
            Create and manage list of your suppliers here.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
        onClick={() => setOpen(true)}>
          <BiPlus />
          <span>Add Supplier</span>
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
          <main className="font-semibold text-gray-400 text-sm grid grid-cols-[3%,25%,25%,15%,9%,12%,4%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Name</div>
            <div>Email</div>
            <div>Supplied</div>
            <div>A.D</div>
            <div>Owed</div>
            <div></div>
          </main>
          <div className="font-medium text-gray-400 text-sm grid grid-cols-[3%,25%,25%,15%,9%,12%,4%] items-center p-2.5 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p className="p-2.5 bg-blue-500 rounded-full text-white">ME</p>
              <div>
                <h2 className="font-medium text-black">Mr. Emmanuel Afolabi</h2>
                <p className="text-xs">+2348167821219</p>
              </div>
            </div>
            <div>emmanuel@email.com</div>
            <div>N390,000.00</div>
            <div>1/1</div>
            <div>April 20,2023</div>
            <div>
              <BsThreeDots className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Suppliers;
