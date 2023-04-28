import React from 'react'
import Layout from "../../layout/Layout";
import { BsCheckLg } from "react-icons/bs";

const Receivables = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Receiveables</h1>
        <p className="text-sm text-gray-400 ">
          Confirm receipt of parts into inventory.
        </p>
      </div>
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
          <main className="font-semibold text-gray-400 text-sm grid grid-cols-[3%,20%,15%,12%,10%,15%,20%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Supplier</div>
            <div>Vehicle</div>
            <div>Item</div>
            <div>Quantity</div>
            <div>Unit Cost</div>
            <div>Confirm</div>
          </main>
          <div className="font-medium text-gray-400 text-sm grid grid-cols-[3%,20%,15%,12%,10%,15%,20%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="grid">
              <p className="text-xs">--|--</p>
            </div>
            <div>
              <h3 className="font-medium text-black">RENAULT • 6688</h3>
            </div>
            <div>
              <p className="font-medium text-black">Brake pad</p>
            </div>
            <div>
              <p>1.00</p>
            </div>
            <div>
              <p className="font-medium text-black">N25,000.00</p>
            </div>

            <div>
              <button className="flex items-center gap-2 bg-blue-500 p-1.5 rounded-md text-sm text-white cursor-pointer font-bold">
                <BsCheckLg />
                <span>Confirm Receipt</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Receivables