import React from "react";

function CloseBtn({ className }) {
  return (
    <button
      type="button"
      className={`bg-white rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 outline-none ring-1 ring-inset  ${className}`}
    >
      <span class="sr-only">Close menu</span>
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}

export default CloseBtn;
