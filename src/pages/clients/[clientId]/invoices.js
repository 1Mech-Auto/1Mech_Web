import { useEffect, useState } from "react";
import DetailsPage from ".";
import { BiPlus } from "react-icons/bi";
import NewInvoiceForm from "@/components/forms/NewInvoiceForm";
import { useFormContext } from "@/context/form_context";
import InvoiceList from "@/components/InvoiceList";
import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TiCancel } from "react-icons/ti";

const Invoices = () => {
  const [invoice, setInvoice] = useState(false);
  const [singleInvoice, setSingleInvoice] = useState([]);
  const { invoiceList, singleClient } = useFormContext();
  const id = singleClient.id;

  const fetchSingleInvoice = (id) => {
    const invoice = invoiceList.filter((I) => I.invoiceForm.client.id === id);
    console.log(invoice);
    setSingleInvoice(invoice);
  };
  useEffect(() => {
    // console.log(invoice);
    fetchSingleInvoice(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const extraInfo = [
    { name: "Edit Details", icon: <HiOutlinePencil /> },
    {
      name: "Create Job Card",
      icon: <HiOutlineMenuAlt2 />,
      state: "setJobCard",
    },
    { name: "Create Quote", icon: <HiOutlineMenuAlt2 /> },
    {
      name: "Create Invoice",
      icon: <HiOutlineMenuAlt2 />,
    },
    {
      name: "Cancel Project",
      icon: <TiCancel />,
    },
    { name: "Delete", icon: <BsTrash /> },
  ];
  const handleClick = (index) => {
    // Perform different setState functions based on index
    if (index === 0) {
      setInfo(true);
    } else if (index === 1) {
      setJobCard(true);
    } else if (index === 2) {
      setQuote(true);
    } else if (index === 3) {
      setInvoice(true);
    } else {
      return "none";
    }
  };

  return (
    <DetailsPage>
      {invoice && <NewInvoiceForm invoice={invoice} setInvoice={setInvoice} />}
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Client Invoices
            </h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of invoices for Autogirl Nig Ltd.
            </p>
          </div>
          <button
            className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
            onClick={() => setInvoice(true)}
          >
            <BiPlus className="text-lg sm:text-sm" />
            <span className="hidden sm:block">Create Invoice</span>
          </button>
        </div>
        <div className="w-full min-h-[9em] bg-white mx-auto text-[#8094ae] text-md pb-4">
          <section className="flex items-center justify-between pt-6 pb-4 text-xs font-bold">
            <p>#</p>
            <p>Project</p>
            <p>Items</p>
            <p>Date/Due</p>
            <p>Total / Balance</p>
            <p>Status</p>
          </section>
          <hr className="mb-3" />
          {singleInvoice &&
            singleInvoice.map((invoice, index) => {
              return (
                <InvoiceList
                  key={index}
                  invoice={invoice}
                  index={index}
                  handleClick={handleClick}
                  extraInfo={extraInfo}
                />
              );
            })}
        </div>
      </div>
    </DetailsPage>
  );
};

export default Invoices;
