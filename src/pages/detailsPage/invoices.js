import {useState} from 'react'
import DetailsPage from '.'
import { BiPlus } from "react-icons/bi";
import NewInvoiceForm from "@/components/NewInvoiceForm";

const Invoices = () => {
  const [invoice, setInvoice] = useState(false);

  return (
    <DetailsPage>
      {invoice && <NewInvoiceForm invoice={invoice} setInvoice={setInvoice} />}

      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-xl font-semibold">Client Invoices</h3>
            <p className="text-sm text-[#526484]">
              A list of invoices for Autogirl Nig Ltd.
            </p>
          </div>
          <button
            className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
            onClick={() => setInvoice(true)}
          >
            <BiPlus />
            <span>Create Invoice</span>
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
          <p className="text-xs text-center">It`s empty here!</p>
        </div>
      </div>
    </DetailsPage>
  );
}

export default Invoices