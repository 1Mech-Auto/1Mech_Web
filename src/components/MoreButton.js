import { HiOutlinePencil } from "react-icons/hi";
import { TbMessageCircle } from "react-icons/tb";
import { BsTrash, BsEye } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Link from "next/link";

function MoreButton({ setInvoice, setJobCard, setQuote, setInfo, setSms }) {
  return (
    <div className="absolute py-6 shadow-lg grid gap-4 bg-white rounded-md text-md font-medium top-0 right-16 z-10">
      <Link href={'/detailsPage/details'} className="flex items-center gap-2 pl-6 pr-8 cursor-pointer text-[#364a63]">
        <BsEye />
        <p className="text-[0.84rem]">View Details</p>
      </Link>
      <div
        className="flex items-center gap-2 pl-6 pr-8 cursor-pointer text-[#364a63]"
        onClick={() => setInfo(true)}
      >
        <HiOutlinePencil />
        <p className="text-[0.84rem]">Edit Details</p>
      </div>
      <div
        className="flex items-center gap-2 pl-6 pr-8 cursor-pointer text-[#364a63]"
        onClick={() => setSms(true)}
      >
        <TbMessageCircle />
        <p className="text-[0.84rem]">Send SMS</p>
      </div>
      <hr />
      <div
        className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
        onClick={() => setJobCard(true)}
      >
        <HiOutlineMenuAlt2 />
        <p className="text-[0.84rem]">Create Job Card</p>
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
      <hr />
      <div
        className="flex items-center pl-6 pr-8 gap-2 cursor-pointer text-[#364a63]"
        onClick={() => setOrderPart(true)}
      >
        <BsTrash />
        <p className="text-[0.84rem]">Delete</p>
      </div>
    </div>
  );
}

export default MoreButton;
