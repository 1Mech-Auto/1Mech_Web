import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import { BsThreeDots, BsArrowLeft } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import {
  BsFillFileEarmarkPersonFill,
  BsFileMedical,
  BsTrash,
} from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi";
import NewJobCard from "@/components/NewJobCard";
import NewInvoiceForm from "@/components/NewInvoiceForm";
import NewQuotesForm from "@/components/NewQuotesForm";
import NewInfoUpdate from "@/components/NewInfoUpdate";
import NewSMSForm from "@/components/NewSMSForm";

const JobDetails = ({ children }) => {
  const [invoice, setInvoice] = useState(false);
  const [show, setShow] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [jobCard, setJobCard] = useState(false);
  const [quote, setQuote] = useState(false);
  const [info, setInfo] = useState(false);
  const [sms, setSms] = useState(false);
  return (
    <Layout>
      {invoice && <NewInvoiceForm invoice={invoice} setInvoice={setInvoice} />}
      {jobCard && <NewJobCard jobCard={jobCard} setJobCard={setJobCard} />}
      {quote && <NewQuotesForm quote={quote} setQuote={setQuote} />}
      {info && <NewInfoUpdate info={info} setInfo={setInfo} />}
      {sms && <NewSMSForm sms={sms} setSms={setSms} />}

      <section className="flex justify-between mb-6 px-6 sm:px-0">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Project / Placeholder
          </h1>
          <div className="text-sm text-[#8094ae] mt-2 flex gap-4 ">
            <p>Project ID: AP0336</p>
            <p> Created On: May 2, 2023 10:13am</p>
          </div>
        </div>
        <div className="flex items-center gap-4 relative">
          <Link
            href={"/jobs"}
            className="sm:flex hidden items-center gap-2 bg-white py-2 px-4 border rounded-sm text-sm text-[#364a63] cursor-pointer font-bold ml-auto"
          >
            <BsArrowLeft />
            <span>Back</span>
          </Link>
          <button
            className="sm:flex hidden items-center gap-2 hover:bg-[#0971fe] border border-[#9dc6ff] py-2 px-4 rounded-md text-sm bg-[#e4efff] text-[#0971fe]  hover:text-white cursor-pointer font-bold ml-auto"
            onClick={() => {
              setShow(!show);
            }}
          >
            <BsThreeDots />
            <span>More</span>
          </button>
          {show && (
            <div className="absolute py-6 shadow-lg sm:grid hidden gap-4 bg-white rounded-md text-md font-medium top-[3.8rem] right-0 z-10">
              <div
                className="flex items-center gap-2 pl-6 pr-8 cursor-pointer text-[#364a63]"
                onClick={() => setInfo(true)}
              >
                <HiOutlinePencil />
                <p className="text-[0.84rem]">Edit Details</p>
              </div>
              <div
                className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                onClick={() => setJobCard(true)}
              >
                <HiOutlineMenuAlt2 />
                <p className="text-[0.84rem]">Create Job Card</p>
              </div>
              <div
                className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                // onClick={() => setJobCard(true)}
              >
                <HiOutlineMenuAlt2 />
                <p className="text-[0.84rem]">Create Task</p>
              </div>
              <hr />
              <div
                className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                // onClick={() => setQuote(true)}
              >
                <HiOutlineMenuAlt2 />
                <p className="text-[0.84rem]">Add Expense</p>
              </div>
              <div
                className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                onClick={() => setQuote(true)}
              >
                <HiOutlineMenuAlt2 />
                <p className="text-[0.84rem]">Create Quote</p>
              </div>
              <div
                className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                onClick={() => setInvoice(true)}
              >
                <HiOutlineMenuAlt2 />
                <p className="text-[0.84rem]">Create Invoice</p>
              </div>
              <div
                className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                // onClick={() => setInvoice(true)}
              >
                <HiOutlineMenuAlt2 />
                <p className="text-[0.84rem]">Cancel Project</p>
              </div>
              <div
                className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                // onClick={() => setOrderPart(true)}
              >
                <BsTrash />
                <p className="text-[0.84rem]">Delete Project</p>
              </div>
            </div>
          )}
        </div>
        <div
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setMoreInfo(!moreInfo)}
        >
          <CgMenuRight />
        </div>
      </section>

      <div className="bg-white min-h-[75vh] relative mx-6 md:mx-0">
        <div
          className={`px-6 flex sm:hidden items-center justify-between transition-all duration-300 linear bg-white absolute left-0 top-0 w-full shadow-md ${
            moreInfo ? " h-20 opacity-100" : " h-0 opacity-0"
          }`}
        >
          {moreInfo && (
            <div className="flex items-center gap-4 relative">
              <Link
                href={"/clients"}
                className="flex sm:hidden items-center gap-2 bg-white py-2 px-4 border rounded-sm text-sm text-[#364a63] cursor-pointer font-bold ml-auto"
              >
                <BsArrowLeft />
                <span>Back</span>
              </Link>
              <button
                className="flex sm:hidden items-center gap-2 hover:bg-[#0971fe] border border-[#9dc6ff] py-2 px-4 rounded-md text-sm bg-[#e4efff] text-[#0971fe]  hover:text-white cursor-pointer font-bold ml-auto"
                onClick={() => {
                  setShow(!show);
                }}
              >
                <BsThreeDots />
                <span>More</span>
              </button>
              {show && (
                <div className="absolute py-6  shadow-lg grid sm:hidden gap-4 bg-white rounded-md text-md font-medium top-[2.4rem] right-0 z-10">
                  <div
                    className="flex items-center gap-2 pl-6 pr-8 cursor-pointer text-[#364a63]"
                    onClick={() => setInfo(true)}
                  >
                    <HiOutlinePencil />
                    <p className="text-[0.84rem]">Edit Details</p>
                  </div>
                  <div
                    className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                    onClick={() => setJobCard(true)}
                  >
                    <HiOutlineMenuAlt2 />
                    <p className="text-[0.84rem]">Create Job Card</p>
                  </div>
                  <div
                    className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                    // onClick={() => setJobCard(true)}
                  >
                    <HiOutlineMenuAlt2 />
                    <p className="text-[0.84rem]">Create Task</p>
                  </div>
                  <hr />
                  <div
                    className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                    // onClick={() => setQuote(true)}
                  >
                    <HiOutlineMenuAlt2 />
                    <p className="text-[0.84rem]">Add Expense</p>
                  </div>
                  <div
                    className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                    onClick={() => setQuote(true)}
                  >
                    <HiOutlineMenuAlt2 />
                    <p className="text-[0.84rem]">Create Quote</p>
                  </div>
                  <div
                    className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                    onClick={() => setInvoice(true)}
                  >
                    <HiOutlineMenuAlt2 />
                    <p className="text-[0.84rem]">Create Invoice</p>
                  </div>
                  <div
                    className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                    // onClick={() => setInvoice(true)}
                  >
                    <HiOutlineMenuAlt2 />
                    <p className="text-[0.84rem]">Cancel Project</p>
                  </div>
                  <div
                    className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
                    // onClick={() => setOrderPart(true)}
                  >
                    <BsTrash />
                    <p className="text-[0.84rem]">Delete Project</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div>
          <div className="h-10 border border-transparent border-b-[#dee2e6] text-[#526484] flex items-center gap-8 text-sm font-bold px-6">
            <Link
              href={"details"}
              className="flex items-center gap-1 cursor-pointer"
            >
              <BsFillFileEarmarkPersonFill className="text-lg md:text-md" />
              <p className="hidden md:block">Details</p>
            </Link>
            <Link
              href={"jobCard"}
              className="flex items-center gap-1 cursor-pointer"
            >
              <HiOutlineMenuAlt2 className="text-lg md:text-md" />
              <p className="hidden md:block">Job Card</p>
            </Link>
            <Link
              href={"tasks"}
              className="flex items-center gap-1 cursor-pointer"
            >
              <BsFileMedical className="text-lg md:text-md" />
              <p className="hidden md:block">Tasks</p>
            </Link>
            <Link
              href={"projects"}
              className="flex items-center gap-1 cursor-pointer"
            >
              <BsFileMedical className="text-lg md:text-md" />
              <p className="hidden md:block">Parts & Expenses</p>
            </Link>
            <Link
              href={"invoices"}
              className="flex items-center gap-1 cursor-pointer"
            >
              <HiOutlineMenuAlt2 className="text-lg md:text-md" />
              <p className="hidden md:block">Invoices</p>
            </Link>
            <Link
              href={"quotes"}
              className="flex items-center gap-1 cursor-pointer"
            >
              <HiOutlineMenuAlt2 className="text-lg md:text-md" />
              <p className="hidden md:block">Quotes</p>
            </Link>
            <Link
              href={"payments"}
              className="flex items-center gap-1 cursor-pointer"
            >
              <HiOutlineMenuAlt2 className="text-lg md:text-md" />
              <p className="hidden md:block">Payments</p>
            </Link>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetails;
