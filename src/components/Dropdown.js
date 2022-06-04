import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";

function Dropdown({ label = "Options", options, className, dropdownStyle, onChange, optionsLabel = "label" }) {
  return (
    // <Menu as="div" className="relative inline-block text-left">
    <Menu as="div" className={`relative inline-block text-left ${dropdownStyle}`}>
      <Menu.Button
        className={`${className} inline-flex items-center text-gray-500 relative h-[48px] px-4 py-2 text-sm rounded-8 border bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 `}
      >
        {label}
        <ChevronDownIcon
          className="w-5 h-5 ml-2 mr-1 absolute right-5 text-gray-500 hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`${dropdownStyle} absolute right-0 w-[390px] mt-2 max-h-[200px] overflow-auto origin-top-right bg-white divide-y z-[100] divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none `}
        >
          <div className="px-1 py-1 ">
            {options.map((props) => (
              <Menu.Item key={props[optionsLabel]}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => onChange(props)}
                  >
                    {props[optionsLabel]}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
