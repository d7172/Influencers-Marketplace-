import React from "react";

const initOptions = [
  { title: "Campaign", onClick: () => {} },
  { title: "Campaign Pool", onClick: () => {} },
];

function Breadcrumbs({ options = initOptions }) {
  return (
    <nav className="rounded-md w-full">
      <ol className="list-reset flex">
        {options.map((option, index) => {
          const isNotLast = options.length - 1 !== index;
          return (
            <>
              <li>
                <button
                  onClick={option?.onClick}
                  className={`capitalize ${isNotLast ? "text-blue-600 hover:text-blue-700" : "text-gray-500"} `}
                >
                  {option.title}
                </button>
              </li>
              {isNotLast && (
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
              )}
            </>
          );
        })}
        {/* <li class="text-gray-500">Campaign Pool</li> */}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
