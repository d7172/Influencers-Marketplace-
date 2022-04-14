import React from "react";

function Breadcrumbs() {
  return (
    <nav class="rounded-md w-full">
      <ol class="list-reset flex">
        <li>
          <a href="#" class="text-blue-600 hover:text-blue-700">
            Campaign
          </a>
        </li>
        <li>
          <span class="text-gray-500 mx-2">/</span>
        </li>
        <li class="text-gray-500">Campaign Pool</li>
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
