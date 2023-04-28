import React from 'react'
import Layout from '../../layout/Layout'

const UnpaidParts = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Unpaid Parts</h1>
        <p className="text-sm text-gray-400 ">
          List of services and parts that are not paid for.
        </p>
      </div>
      <div className="w-full min-h-[9em] bg-white rounded-sm drop-shadow-md mt-12 mx-auto px-6 text-gray-500 font-bold text-md pb-4">
        <section className="flex items-center justify-between pt-6 pb-4 px-10 text-xs">
          <p>#</p>
          <p>Project</p>
          <p>Expense / Supplier</p>
          <p>Date / Due Date</p>
          <p>Amount</p>
          <p>Status</p>
          <p>Payment</p>
        </section>
        <hr className="mb-3" />
        <p className="text-center font-light text-sm">It`s empty here</p>
      </div>
    </Layout>
  );
}

export default UnpaidParts