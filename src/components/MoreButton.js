import React from "react";
import { Popover } from "@headlessui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];


function MoreButton() {
  return (
    <Popover className="relative">
      {/* <Popover.Button>Solutions</Popover.Button> */}

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

        {/* <Image src="/solutions.jpg" alt="check" /> */}
      </Popover.Panel>
    </Popover>
  );
}

export default MoreButton;
