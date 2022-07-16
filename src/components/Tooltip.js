/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function Tooltip({ actionButton, items }) {
  return (
    <Menu as="div" className="inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full ">
          {actionButton}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute bottom-[200px] flex flex-col right-8 mt-2 py-2 w-56 px-4 bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-100 z-10">
            {items.map((item, i) => (
              <Menu.Item className="mt-2 text-left" key={i}>
                <button onClick={item?.onClick} >{item.title}</button>
              </Menu.Item>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
