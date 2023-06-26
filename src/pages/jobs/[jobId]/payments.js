import { useEffect, useState } from "react";
import JobDetails from ".";
import { BiPlus } from "react-icons/bi";
import NewPaymentForm from "@/components/forms/NewPaymentForm";
import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TiCancel } from "react-icons/ti";
import { useFormContext } from "@/context/form_context";
import PaymentList from "@/components/PaymentList";

const Payments = () => {
  const [payment, setPayment] = useState(false);
  const [singlePayment, setSinglePayment] = useState([]);
  const { paymentsList, singleJob } = useFormContext();
  const id = singleJob.id;

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
  const fetchSinglePayment = (id) => {
    const payment = paymentsList.filter((p) => p.paymentsForm.job.id === id);
    setSinglePayment(payment);
    console.log(payment);
  };
  useEffect(() => {
    fetchSinglePayment(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <JobDetails>
      {payment && <NewPaymentForm payment={payment} setPayment={setPayment} />}
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Project Payments
            </h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of payments for TOYOTA Camry - KSF-178-HX project.
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
          {singlePayment && singlePayment?.length >= 1 ? (
            singlePayment.map((payment, index) => {
              return (
                <PaymentList
                  key={index}
                  payment={payment}
                  index={index}
                  handleClick={handleClick}
                  extraInfo={extraInfo}
                />
              );
            })
          ) : (
            <p className="text-xs text-center">It`s empty here!</p>
          )}
        </div>
      </div>
    </JobDetails>
  );
};

export default Payments;
