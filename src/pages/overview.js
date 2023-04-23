import React from 'react'
import Layout from '../../layout/Layout'
import Image from "next/image";
import { BsCreditCard } from "react-icons/bs";


const Overview = () => {
  return (
    <Layout>
      <h1 className="mb-6 text-2xl font-bold">Overview</h1>
      <div className="grid gap-6 text-[#364a63] pb-6">
        <div className="grid md:grid-cols-2 gap-6 ">
          <article className="grid md:grid-cols-2 grid-rows-2 gap-6">
            <div className="border-2 border-t-teal-400 bg-white rounded-md min-h-[10em] px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">
                Unpaid Invoices
              </h4>
              <p className="text-3xl sm:text-xl lg:text-3xl font-semibold">354,825.00</p>
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <BsCreditCard className="text-red-400" />
                <p className="text-red-500">354,825.00</p>
                <p>Overdue</p>
              </div>
            </div>
            <div className="border-2 border-t-teal-400 bg-white rounded-md min-h-[10em] px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">Active Jobs</h4>
              <p className="text-3xl sm:text-xl lg:text-3xl font-semibold">0</p>
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <BsCreditCard className="text-green-400" />
                <p className="text-green-500">0</p>
                <p>Completed</p>
              </div>
            </div>
            <div className="border-2 border-t-teal-400 bg-white rounded-md min-h-[10em] px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">
                Pending Tasks
              </h4>
              <p className="text-3xl sm:text-xl lg:text-3xl font-semibold">0</p>
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <BsCreditCard className="text-green-400" />
                <p className="text-green-500">0</p>
                <p>Completed</p>
              </div>
            </div>
            <div className="border-2 border-t-teal-400 bg-white rounded-md min-h-[10em] px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">Income</h4>
              <p className="text-3xl sm:text-xl lg:text-3xl font-semibold">2,010,675.00</p>
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <BsCreditCard className="text-green-400" />
                <p className="text-green-500">1</p>
                <p>payments</p>
              </div>
            </div>
          </article>
          <article className="bg-white border-2 border-t-teal-400 rounded-md p-5">
            <h2 className="font-bold capitalize text-md">job statistics</h2>
          </article>
        </div>
        <div className="grid md:grid-cols-2 gap-6 ">
          <article className="bg-white border-2 border-t-indigo-400 rounded-md p-5">
            <h2 className="font-bold capitalize text-md">Task statistics</h2>
          </article>
          <article className="grid md:grid-cols-2 grid-rows-2 gap-6">
            <div className="border-2 border-t-indigo-400 bg-white rounded-md min-h-[10em] px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">Income 2023</h4>
              <p className="text-3xl sm:text-xl lg:text-3xl font-semibold">2,010,675.00</p>
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <BsCreditCard className="text-red-400" />
                <p>Payments this year</p>
              </div>
            </div>
            <div className="border-2 border-t-indigo-400 bg-white rounded-md min-h-[10em] px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">Profits 2023</h4>
              <p className="text-3xl sm:text-xl lg:text-3xl font-semibold">2,365,500.00</p>
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <BsCreditCard className="text-green-400" />
                <p>Income minus expenses</p>
              </div>
            </div>
            <div className="border-2 border-t-indigo-400 bg-white rounded-md min-h-[10em] px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">
                Total Clients
              </h4>
              <p className="text-3xl sm:text-xl lg:text-3xl font-semibold">1</p>
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <BsCreditCard className="text-green-400" />
                <p>Active Clients</p>
              </div>
            </div>
            <div className="border-2 border-t-indigo-400 bg-white rounded-md min-h-[10em] px-5 py-3 grid items-between">
              <h4 className="font-bold text-lg tracking-tight">Total Staff</h4>
              <p className="text-3xl sm:text-xl lg:text-3xl font-semibold">4</p>
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <BsCreditCard className="text-green-400" />
                <p>Active & Inactive Staff</p>
              </div>
            </div>
          </article>
        </div>
        <div className="p-5 bg-white rounded-md min-h-[20em]">
          <h2 className="font-bold text-sm">Payments last 12 months</h2>
        </div>
      </div>
    </Layout>
  );
}

export default Overview