import React from "react";
import DetailsPage from ".";
import { RxDotFilled } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";


const Projects = () => {
  return (
    <DetailsPage>
      <div className="px-6">
        <div className="py-6 md:col-span-2">
          <h3 className="text-xl font-semibold">Client Projects</h3>
          <p className="text-sm text-[#526484]">
            A list of Autogirl Nig Ltd`s projects.
          </p>
        </div>
        <div className="flex justify-between mb-4">
          <input
            className="placeholder:text-xs border pl-2 py-1 rounded-sm"
            placeholder="Type in to Search"
          />
          <div className="flex items-center gap-2">
            <p className="text-sm">Show</p>
            <select className="outline-none border rounded-md text-xs px-1">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div className="border rounded-md min-h-[30vh] overflow-x-auto">
          <main className="font-semibold text-[#8094ae] text-xs grid grid-cols-[3em,15em,10em,11em,8em,6em,9em,3em] lg:grid-cols-[3%,25%,15%,20%,15%,10%,14%,4%] p-2.5 border border-transparent border-b-gray-200">
            <div>#</div>
            <div>Client</div>
            <div>Project</div>
            <div>Profit / Start-Finish</div>
            <div>Invoiced / Cost</div>
            <div>P. Tasks</div>
            <div>Status</div>
            <div></div>
          </main>
          <div className="font-normal text-[#364a63] text-[13px] grid grid-cols-[3em,15em,10em,11em,8em,6em,9em,3em] lg:grid-cols-[3%,25%,15%,20%,15%,10%,14%,4%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
                ME
              </p>
              <div>
                <h2 className="font-medium text-black">Mr. Emmanuel Afolabi</h2>
                <p className="text-xs text-[#8094ae]">+2348167821219</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-black">DODGE Journey</h3>
              <p className="text-[#8094ae]">LND398FC</p>
            </div>
            <div>
              <h3 className="font-medium text-black">N0.00</h3>
              <p className="text-[#8094ae]">Apr 24, 23 - May 02, 23</p>
            </div>
            <div>
              <h3 className="font-medium text-[#8094ae]">N0.00</h3>
              <p className="text-[#8094ae]">N0.00</p>
            </div>
            <div className="text-[#8094ae]">0/0</div>
            <div className="py-1.5 px-2.5 text-yellow-500 bg-yellow-100 rounded-2xl flex items-center mr-auto gap-2 ">
              <RxDotFilled className="text-md" />
              <p className="text-xs font-bold">In Progress</p>
            </div>
            <div>
              <BsThreeDots className="cursor-pointer text-xl" />
            </div>
          </div>
        </div>
      </div>
    </DetailsPage>
  );
};

export default Projects;
