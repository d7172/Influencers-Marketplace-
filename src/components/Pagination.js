import React from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/solid";

function Pagination({ link, activePage, setActivePage }) {
  console.log(link, "linkk");
  let paginationRange = [];
  const totalPages = Math.ceil(link.count / 2);
  function PageRang() {
    if (activePage <= 4) {
      if (totalPages > 4) {
        for (let i = 1; i <= 4; i++) {
          paginationRange.push(i);
        }
      }
      else {
        for (let i = 1; i <= totalPages; i++) {
          paginationRange.push(i);
        }
      }
    }
    else {
      paginationRange.shift();
      paginationRange.push(activePage);
    }
    return paginationRange;
  }
  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-500">Showing 10 from 48 data</p>
      <div className="flex justify-center border-2 border-[#D7D7D7] w-fit px-1 py-2 rounded-[16px] ">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none items-center">
            <li className="page-item">
              <button
                disabled={link.previous === null}
                className="page-link relative block py-1.5 px-3 disabled:text-[#93939399]  border-0 bg-transparent outline-none transition-all duration-300 rounded  text-[#3751FF] hover:text-gray-800 focus:shadow-none"
                aria-label="Previous"
                onClick={() => setActivePage(activePage - 1)}
              >
                <ChevronDoubleLeftIcon className="w-5" />
              </button>
            </li>
            {PageRang().map((page) => (
              <li key={page} className={`page-item ${(page === activePage) ? `bg-[#3751FF] text-white` : `text-[#3751FF]`}  rounded-[16px] w-[51px] h-[51px] flex items-center justify-center`} onClick={() => setActivePage(page)}>
                <a
                  className="page-link cursor-pointer relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded focus:shadow-none"
                >
                  {page}
                </a>
              </li>
            ))}

            {/* <li className="page-item rounded-[16px] w-[51px] h-[51px] flex items-center justify-center">
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
            </li> */}
            <li className="page-item rounded-[16px] w-[51px] h-[51px] flex items-center justify-center">
              <button
                disabled={link.next === null}
                className="page-link relative block py-1.5 px-3 disabled:text-[#93939399] border-0 bg-transparent outline-none transition-all duration-300 rounded text-[#3751FF] hover:text-gray-800  focus:shadow-none"
                aria-label="Next"
                onClick={() => setActivePage(activePage + 1)}

              >
                <ChevronDoubleRightIcon className="w-5" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
