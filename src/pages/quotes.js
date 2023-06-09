import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import NewQuotesForm from "@/components/NewQuotesForm";
import { CgMenuRight } from "react-icons/cg";
import { useFormContext } from "@/context/form_context";

const Quotes = () => {
  const [quote, setQuote] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const { quoteList } = useFormContext();
  return (
    <Layout>
      {quote && <NewQuotesForm quote={quote} setQuote={setQuote} />}

      <section className="flex justify-between items-center mb-6 px-6 sm:px-0">
        <div>
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Quotes
          </h1>
          <p className="text-sm text-[#8094ae] ">A total of 3 quotes.</p>
        </div>
        <button
          className="sm:flex hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => setQuote(true)}
        >
          <BiPlus />
          <span>Create a Quote</span>
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
                setQuote(true);
              }}
            >
              <BiPlus />
              <span>Create a Quote</span>
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
          <main className="font-semibold text-[#8094ae] text-sm grid grid-cols-[7%,75%,5%] md:grid-cols-[3em,15em,14em,9em,7em,9em,8em,3em] lg:grid-cols-[4%,22%,17%,10%,15%,20%,5%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div className="hidden md:block">Project</div>
            <div>Registration</div>
            <div className="hidden md:block">Items</div>
            <div className="hidden md:block">Date</div>
            <div className="hidden md:block">Total</div>
            <div></div>
          </main>
          <div className="font-medium text-[#364a63] text-sm grid grid-cols-[7%,75%,5%] md:grid-cols-[3em,15em,14em,9em,7em,9em,8em,3em] lg:grid-cols-[4%,22%,17%,10%,15%,20%,5%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p>TOYOTA Camry</p>
            </div>
            <div className="hidden md:block">
              <h3 className="font-medium text-black">KSF-178-HX</h3>
            </div>
            <div className="hidden md:block">
              <p className="font-medium text-black">22</p>
            </div>
            <div className="hidden md:block text-[#8094ae]">
              <p>May 2, 2023</p>
            </div>
            <div className="font-medium text-black hidden md:block">
              N538,075.00
            </div>
            <div>
              <BsThreeDots className="cursor-pointer text-xl" />
            </div>
          </div>
          {quoteList &&
            quoteList.map((quote, index) => {
              return (
                <div
                  key={index}
                  className="font-medium text-[#364a63] text-sm grid grid-cols-[7%,75%,5%] md:grid-cols-[3em,15em,14em,9em,7em,9em,8em,3em] lg:grid-cols-[4%,22%,17%,10%,15%,20%,5%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple"
                >
                  <div>{index + 1}</div>
                  <div className="flex items-center gap-2">
                    <p>{quote.job}</p>
                  </div>
                  <div className="hidden md:block">
                    <h3 className="font-medium text-black">
                      {quote.itemDescription}
                    </h3>
                  </div>
                  <div className="hidden md:block">
                    <p className="font-medium text-black">{quote.quantity}</p>
                  </div>
                  <div className="hidden md:block text-[#8094ae]">
                    <p>{quote.date}</p>
                  </div>
                  <div className="font-medium text-black hidden md:block">
                    N538,075.00
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

export default Quotes;
