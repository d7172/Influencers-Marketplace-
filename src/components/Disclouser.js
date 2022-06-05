import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function CustomDisclosure({ label, content, className, inActiveColor, activeColor }) {
  return (
    <div className="w-full px-2">
      <div className={`w-full max-w-md p-2 pl-0 mx-auto bg-white rounded-2xl `}>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex items-center justify-between w-full text-left transition duration-200 ease-in-out ${className} ${
                  open ? activeColor : inActiveColor
                }`}
              >
                <span>{label}</span>
                <ChevronDownIcon className={`${open ? "transform rotate-180 " + activeColor : inActiveColor} w-6 h-6 `} />
              </Disclosure.Button>
              <Disclosure.Panel className="">{content()}</Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
