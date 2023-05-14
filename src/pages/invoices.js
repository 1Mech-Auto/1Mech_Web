import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import NewInvoiceForm from "@/components/NewInvoiceForm";
import { CgMenuRight } from "react-icons/cg";
import { useFormContext } from "@/context/form_context";

const Invoices = () => {
  const [invoice, setInvoice] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const { invoiceList } = useFormContext();

  return (
    <Layout>
      {invoice && <NewInvoiceForm invoice={invoice} setInvoice={setInvoice} />}

      <section className="flex justify-between items-center mb-6 px-6 sm:px-0">
        <div>
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Invoices
          </h1>
          <p className="text-sm text-[#8094ae] ">A total of 2 invoices.</p>
        </div>
        <button
          className="sm:flex hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => setInvoice(true)}
        >
          <BiPlus />
          <span>Create Invoice</span>
        </button>
        <div
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setMoreInfo(!moreInfo)}
        >
          <CgMenuRight />
        </div>
      </section>
      <div className="bg-white min-h-[85vh] p-6 relative">
        <div
          className={`px-6 flex sm:hidden items-center justify-between transition-all duration-300 linear bg-white absolute left-0 top-0 w-full shadow-md ${
            moreInfo ? " h-20 opacity-100" : " h-0 opacity-0"
          }`}
        >
          {moreInfo && (
            <button
              className="flex sm:hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold"
              onClick={() => {
                setInvoice(true);
              }}
            >
              <BiPlus />
              <span>Create Invoice</span>
            </button>
          )}
        </div>
        <div className="flex justify-between mb-4">
          <input
            className="placeholder:text-xs border pl-2 py-1 rounded-sm"
            placeholder="Type in to Search"
          />
          <div className="flex items-center gap-2">
            <p className="text-sm hidden sm:block">Show</p>
            <select className="outline-none border rounded-md text-xs px-1">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div className="border rounded-md min-h-[30vh] overflow-x-auto ">
          <main className="font-semibold text-[#8094ae] text-sm grid grid-cols-[6%,80%,5%] md:grid-cols-[3em,15em,7em,4em,7em,9em,7em,3em] lg:grid-cols-[3%,25%,13%,10%,14%,12%,10%,5%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Client</div>
            <div className="hidden md:block">Project</div>
            <div className="hidden md:block">Items</div>
            <div className="hidden md:block">Date/Due</div>
            <div className="hidden md:block">Total/Balance</div>
            <div className="hidden md:block">Status</div>
            <div></div>
          </main>
          <div className="font-medium text-[#364a63] text-sm grid grid-cols-[6%,80%,5%] md:grid-cols-[3em,15em,7em,4em,7em,9em,7em,3em] lg:grid-cols-[3%,25%,13%,10%,14%,12%,10%,5%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p className="p-2.5 bg-blue-500 rounded-full text-white">ME</p>
              <div>
                <h2 className="font-medium">Mr. Emmanuel Afolabi</h2>
                <p className="text-xs text-[#8094ae]">+2348167821219</p>
              </div>
            </div>
            <div className="hidden md:block">
              <h3 className="font-medium">9 41</h3>
              <p className="text-xs text-[#8094ae]">AAA808EJ</p>
            </div>
            <div className="hidden md:block">
              <p className="font-medium">2</p>
            </div>
            <div className="hidden md:block">
              <p>Apr 20, 2023</p>
              <p>Apr 25, 2023</p>
            </div>
            <div className="font-medium hidden md:block">
              <p>N64,000.00</p>
              <p className="text-[#8094ae]">N0.00</p>
            </div>
            <div className="py-1.5 px-2.5 text-yellow-500 bg-yellow-100 rounded-2xl items-center gap-2 hidden md:flex">
              <RxDotFilled className="text-lg" />
              <p className="text-sm font-bold">Partial</p>
            </div>
            <div>
              <BsThreeDots className="cursor-pointer text-xl" />
            </div>
          </div>
          {invoiceList &&
            invoiceList.map((invoice, index) => {
              return (
                <div
                  key={index}
                  className="font-medium text-[#364a63] text-sm grid grid-cols-[6%,80%,5%] md:grid-cols-[3em,15em,7em,4em,7em,9em,7em,3em] lg:grid-cols-[3%,25%,13%,10%,14%,12%,10%,5%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple"
                >
                  <div>{index + 1}</div>
                  <div className="flex items-center gap-2">
                    <p className="p-2.5 bg-blue-500 rounded-full text-white">
                      ME
                    </p>
                    <div>
                      <h2 className="font-medium">{invoice.job}</h2>
                      <p className="text-xs text-[#8094ae]">+2348167821219</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <h3 className="font-medium">9 41</h3>
                    <p className="text-xs text-[#8094ae]">AAA808EJ</p>
                  </div>
                  <div className="hidden md:block">
                    <p className="font-medium">2</p>
                  </div>
                  <div className="hidden md:block">
                    <p>{invoice.invoiceDate}</p>
                    <p>{invoice.paymentDate}</p>
                  </div>
                  <div className="font-medium hidden md:block">
                    <p>N64,000.00</p>
                    <p className="text-[#8094ae]">N0.00</p>
                  </div>
                  <div className="py-1.5 px-2.5 text-yellow-500 bg-yellow-100 rounded-2xl items-center gap-2 hidden md:flex">
                    <RxDotFilled className="text-lg" />
                    <p className="text-xs font-bold">Partial</p>
                  </div>
                  <div>
                    <BsThreeDots className="cursor-pointer text-xl" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Invoices;
