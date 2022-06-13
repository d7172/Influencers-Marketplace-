import React from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/solid";

function Pagination({ link }) {
  console.log(link, "linkk");
  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-500">Showing 10 from 48 data</p>
      <div className="flex justify-center border-2 border-[#D7D7D7] w-fit px-1 py-2 rounded-[16px] ">
        <nav aria-label="Page navigation example">
          {
            <ul className="flex list-style-none items-center">
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded  text-[#3751FF] hover:text-gray-800 focus:shadow-none"
                  href={link?.previous}
                  aria-label="Previous"
                >
                  <ChevronDoubleLeftIcon className="w-5" />
                </a>
              </li>
              <li className="page-item bg-[#3751FF] rounded-[16px] w-[51px] h-[51px] flex items-center justify-center">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded  text-white focus:shadow-none"
                  href={link?.previous || link?.next}
                >
                  1
                </a>
              </li>
              <li className="page-item rounded-[16px] w-[51px] h-[51px] flex items-center justify-center">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-[#3751FF] focus:shadow-none"
                  href="#"
                >
                  2
                </a>
              </li>
              <li className="page-item rounded-[16px] w-[51px] h-[51px] flex items-center justify-center">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-[#3751FF] focus:shadow-none"
                  href="#"
                >
                  3
                </a>
              </li>
              <li className="page-item rounded-[16px] w-[51px] h-[51px] flex items-center justify-center">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-[#3751FF] focus:shadow-none"
                  href="#"
                >
                  4
                </a>
              </li>
              <li className="page-item rounded-[16px] w-[51px] h-[51px] flex items-center justify-center">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-[#3751FF] hover:text-gray-800  focus:shadow-none"
                  href={link?.next}
                  aria-label="Next"
                >
                  <ChevronDoubleRightIcon className="w-5" />
                </a>
              </li>
            </ul>
          }
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
