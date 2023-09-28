import React from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
import { Popover } from "@headlessui/react";
export default function Header() {
  return (
    <div className="h-16 px-4 bg-cyan-500 flex justify-between items-center">
      <div className="relative">
        <HiOutlineSearch
          fontSize={25}
          className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search...."
          className="text-sm pr-4 pl-11 focus:outline-none rounded h-10 w-[24rem]"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span>Solutions</span>
                <ChevronDownIcon
                  className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
            </>
          )}
        </Popover>
        <HiOutlineBell fontSize={24} />
      </div>
    </div>
  );
}
