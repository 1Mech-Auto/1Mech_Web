import React from "react";
import Layout from "../../layout/Layout";

const Issueables = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Issueables</h1>
        <p className="text-sm text-gray-400 ">
          Inventory items to be issued to specific vehicles.
        </p>
      </div>

      <div className="w-full min-h-[9em] bg-white rounded-sm drop-shadow-md mt-12 mx-auto px-6 text-gray-500 font-bold text-md pb-4">
        <section className="flex items-center justify-between pt-6 pb-4 px-10 text-xs">
          <p>#</p>
          <p>Supplier</p>
          <p>Vehicle</p>
          <p>Item</p>
          <p>Quantity</p>
          <p>Unit Cost</p>
          <p>Status</p>
        </section>
        <hr className="mb-3" />
      </div>
    </Layout>
  );
};

export default Issueables;
