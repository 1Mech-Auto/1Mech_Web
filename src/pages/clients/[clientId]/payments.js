import { useState } from "react";
import DetailsPage from ".";
import { BiPlus } from "react-icons/bi";
import NewPaymentForm from "@/components/forms/NewPaymentForm";

const Payments = () => {
  const [payment, setPayment] = useState(false);

  return (
    <DetailsPage>
      {payment && <NewPaymentForm payment={payment} setPayment={setPayment} />}
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Client Payments
            </h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of payments by Autogirl Nig Ltd.
            </p>
          </div>
          <button
            className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
            onClick={() => setPayment(true)}
          >
            <BiPlus className="text-lg sm:text-sm" />
            <span className="hidden sm:block">Add Payment</span>
          </button>
        </div>
        <div className="w-full min-h-[9em] bg-white mx-auto text-[#8094ae] text-md pb-4">
          <section className="flex items-center justify-between pt-6 pb-4 text-xs font-bold">
            <p>#</p>
            <p>Project</p>
            <p>Invoice</p>
            <p>Payment Date</p>
            <p>Amount</p>
            <p>Status</p>
          </section>
          <hr className="mb-3" />
          <p className="text-xs text-center">It`s empty here!</p>
        </div>
      </div>
    </DetailsPage>
  );
};

export default Payments;
